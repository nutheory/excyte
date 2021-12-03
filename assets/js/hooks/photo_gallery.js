import Cropper from "cropperjs"
import "../../node_modules/cropperjs/dist/cropper.css"

export const PhotoGallery = {
  mounted() {
    let blob
    const imageWrapper = document.querySelector(`#imageCanvas`)

    this.handleEvent('photoGallery', ({ refid }) => {
      const imgEl = document.querySelector(`#${refid}`)
      var image = new Image()
      image.src = imgEl.src
      imageWrapper.appendChild(image)
      setTimeout(() => {
        cropper = new Cropper(image, {
          aspectRatio: aspectRatio,
          dragMode: 'none',
        })
      }, 200)
      console.log("REF_ID", imgEl.src)

    })
  }
}