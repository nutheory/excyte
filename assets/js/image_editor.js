import Cropper from "cropperjs"
import Dropzone from "dropzone"
import "cropperjs/dist/cropper.css"
import "dropzone/dist/dropzone.css"

Dropzone.autoDiscover = false

export const ImageEditor = {
  mounted() {
    const name = this.el.dataset.name
    const width = parseInt(this.el.dataset.width)
    const height = parseInt(this.el.dataset.height)
    const imageUrl = this.el.dataset.imageUrl
    const uploadText = this.el.dataset.uploadText
    const aspectRatio = this.el.dataset.aspectRatio
    const imageWrapper = this.el.querySelector(`#${name}Canvas`)
    const confirmButton = this.el.querySelector(`#${name}Confirm`)
    let cropper

    let dZone = new Dropzone(`#${name}Target`, {
      url: '/uploader/auth',
      maxFiles: 1,
      thumbnailWidth: width,
      thumbnailHeight: height,
      dictDefaultMessage: uploadText,
      addRemoveLinks: true,
      acceptedFiles: "image/jpeg, image/jpg, image/png, image/gif",
      init: function () {
        if (imageUrl !== "" || imageUrl !== null) {
          var mockFile = { name: "Agent Photo", type: 'image/jpeg' }
          this.options.addedfile.call(this, mockFile)
          this.options.thumbnail.call(this, mockFile, imageUrl)
          const size = mockFile.previewElement.querySelector(`.dz-size`)
          size.classList.add('hidden')
          mockFile.previewElement.classList.add('dz-success')
          mockFile.previewElement.classList.add('dz-complete')
        }
      },
      transformFile: function (file, done) {
        confirmButton.addEventListener('click', function () {
          const canvas = cropper.getCroppedCanvas({});
          canvas.toBlob(blob => {
            dZone.createThumbnail(
              blob,
              dZone.options.thumbnailWidth,
              dZone.options.thumbnailHeight,
              dZone.options.thumbnailMethod,
              false,
              (dataURL) => {
                dZone.emit('thumbnail', file, dataURL)
                done(blob)
              }
            )
          }, 'image/jpeg', 0.9)
        })
      }
    })

    dZone.on("addedfile", file => {
      console.log("A file has been added")
      this.pushEventTo(this.el, "toggle-upload-editor-panel", {}, reply => { 
        var image = new Image()
        image.src = URL.createObjectURL(file)
        imageWrapper.appendChild(image)
        setTimeout(() => {
          cropper = new Cropper(image, {
            aspectRatio: aspectRatio,
            crop(event) {
              console.log(event.detail.x);
              console.log(event.detail.y);
              console.log(event.detail.width);
              console.log(event.detail.height);
              console.log(event.detail.rotate);
              console.log(event.detail.scaleX);
              console.log(event.detail.scaleY);
            },
          })
        }, 200)
      })
    })


    // const image = this.el.querySelector('#file-field');
    
    
    
    // this.handleEvent("panelTrigger", () => {
    //   setTimeout(() => {
    //     const cropper = new Cropper(image, {
    //       aspectRatio: 4 / 3,
    //       // viewMode: 3,
    //       crop(event) {
    //         console.log(event.detail.x);
    //         console.log(event.detail.y);
    //         console.log(event.detail.width);
    //         console.log(event.detail.height);
    //         console.log(event.detail.rotate);
    //         console.log(event.detail.scaleX);
    //         console.log(event.detail.scaleY);
    //       },
    //     })
    //   }, 200)
    // })
  },
  destroyed() {
    // window.editorHook = null
    // window.currentEditor = null
  },
}