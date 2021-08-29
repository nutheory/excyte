import Cropper from "cropperjs"
import Dropzone from "dropzone"
import "cropperjs/dist/cropper.css"
import "dropzone/dist/dropzone.css"



export const ImageEditor = {
  mounted() {
    const name = this.el.dataset.name
    const image_wrapper = this.el.querySelector(`#${name}_canvas`)
    const confirm_button = this.el.querySelector(`#${name}_confirm`)
    let cropper

    // Dropzone.autoDiscover = false
    let dZone = new Dropzone(`#${name}Target`, {
      url: '/uploader/auth',
      transformFile: function (file, done) {
        confirm_button.addEventListener('click', function () {
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
        image_wrapper.appendChild(image)
        setTimeout(() => {
          cropper = new Cropper(image, {
            aspectRatio: 4 / 3,
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