import Cropper from "cropperjs"
import Dropzone from "dropzone"
import axios from 'axios'
import { nanoid } from 'nanoid'
import "../../node_modules/cropperjs/dist/cropper.css"
import "../../node_modules/dropzone/dist/dropzone.css"

Dropzone.autoDiscover = false

export const ImageEditor = {
  mounted() {
    const modelId = this.el.dataset.modelId
    const name = this.el.dataset.name
    const title = this.el.dataset.title
    const width = parseInt(this.el.dataset.width)
    const height = parseInt(this.el.dataset.height)
    const uploadText = this.el.dataset.uploadText
    const aspectRatio = this.el.dataset.aspectRatio
    const bucket = this.el.dataset.bucket
    const imageWrapper = this.el.querySelector(`#${name}Canvas`)
    const confirmButton = this.el.querySelector(`#${name}Confirm`)
    const resetButton = this.el.querySelector(`#${name}Reset`)
    let imageUrl = this.el.dataset.imageUrl
    let cropper

    let dZone = new Dropzone(`#${name}Target`, {
      url: '/',
      maxFiles: 1,
      method: 'put',
      parallelUploads: 1,
      uploadMultiple: false,
      autoProcessQueue: false,
      thumbnailWidth: width,
      thumbnailHeight: height,
      dictDefaultMessage: uploadText,
      addRemoveLinks: true,
      acceptedFiles: "image/jpeg, image/jpg, image/png, image/gif",
      sending: function (file, xhr) {
        let _send = xhr.send
        xhr.send = () => {
          _send.call(xhr, file.blob)
        }
      },
      init: function () {
        if (imageUrl !== "") {
          var mockFile = { name: title }
          this.options.addedfile.call(this, mockFile)
          this.options.thumbnail.call(this, mockFile, imageUrl)
          const size = mockFile.previewElement.querySelector(`.dz-size`)
          size.classList.add('hidden')
          mockFile.previewElement.classList.add('dz-success')
          mockFile.previewElement.classList.add('dz-complete')
        }
      },
      renameFile: function (_file) {
        return nanoid(10)
      },
      transformFile: function (file, done) {
        resetButton.addEventListener('click', function () {
          let reset = confirm("Are you sure you want to reset the canvas to its original state?")
          if (reset === true) { cropper.reset() }
        })

        confirmButton.addEventListener('click', function () {
          let canvas = cropper.getCroppedCanvas({
            maxWidth: 1600,
            maxHeight: 1400,
            fillColor: '#fff',
            imageSmoothingQuality: 'high',
          })
          canvas.toBlob(blob => {
            dZone.createThumbnail(
              blob,
              dZone.options.thumbnailWidth,
              dZone.options.thumbnailHeight,
              dZone.options.thumbnailMethod,
              false,
              (dataURL) => {
                dZone.emit('thumbnail', file, dataURL)
                file.blob = blob
                done(blob)
              }
            )
          }, 'image/jpeg', 0.9)
        })
      },
      accept: function (file, done) {
        axios.get(`/uploader/presigned`, {
          params: {
            type: file.type,
            filename: file.upload.filename,
            bucket: `${bucket}/${modelId}`
          }
        }).then((res) => {
          file.uploadURL = res.data
          done()
          // Manually process each file
          setTimeout(() => dZone.processFile(file))
        }).catch((err) => {
          done('Failed to get an S3 signed upload URL', err)
        })
      },
    })

    dZone.on("addedfile", file => {
      this.pushEventTo(this.el, "toggle-upload-editor-panel", {}, reply => { 
        var image = new Image()
        image.src = URL.createObjectURL(file)
        imageWrapper.appendChild(image)
        setTimeout(() => {
          cropper = new Cropper(image, {
            aspectRatio: aspectRatio,
            dragMode: 'none',
          })
        }, 200)
      })
    })

    dZone.on('processing', (file) => {
      dZone.options.url = file.uploadURL
    })

    dZone.on('success', (file, _resp) => {
      this.pushEventTo(this.el, "uploader-callback", {
        bucket, 
        name,
        filename: file.upload.filename,
        type: file.blob.type,
        size: file.blob.size,
      }, reply => {
        imageUrl = `//excyte.s3.amazonaws.com/${bucket}/${modelId}/${file.upload.filename}`
      })
    })

    dZone.on('error', (file, resp, q) => {

    })

    dZone.on('complete', (file, resp) => {

    })

    dZone.on('reset', _file => {
      this.pushEventTo(this.el, "destroy-callback", { url: imageUrl, name }, reply => {

      })
    })

    dZone.on("removedFile", _file => {
      this.pushEventTo(this.el, "destroy-callback", { url: imageUrl, name }, reply => {
      })
    })
  },
  destroyed() {
    // window.editorHook = null
    // window.currentEditor = null
  },
}