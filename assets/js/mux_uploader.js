import * as UpChunk from '@mux/upchunk'

export const MuxUploader = {
  mounted() {
    const uploadButton = this.el.querySelector('#file-field')
    const addingFile = this.el.querySelector('#adding-file')
    const fileName = this.el.querySelector('#filename')
    const progressBar = this.el.querySelector('#upload-progress')
    let ts = Math.round((new Date()).getTime() / 1000)
    let csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content")
    let upload_data
    let file
    this.handleEvent("directUpload", ({uuid, aid, bid}) => {
      upload_data = {uuid, agent_id: aid, brokerage_id: bid}
      upload_data.name = file.name
      upload_data.size = file.size
      upload_data.type = file.type
      const getUploadUrl = () =>
        fetch('/mux/upload', {
          method: 'POST',
          headers: {
            'x-csrf-token': csrfToken,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(upload_data),
        }).then(res => res.ok ? res.text() : console.log("FAIL", res))

      const upload = UpChunk.createUpload({
        endpoint: getUploadUrl,
        file: file,
        chunkSize: 5120, // Uploads the file in ~5mb chunks
      })

      upload.on('error', err => {
        console.error('💥 🙀', err.detail)
        addingFile.classList.add('hidden')
        uploadButton.setAttribute('value', "")
      })

      upload.on('attempt', attempt => {
        uploadButton.classList.add('hidden')
        addingFile.classList.remove('hidden')
        fileName.innerHTML = file.name
      })

      upload.on('progress', progress => {
        let val = Math.round(progress.detail)
        progressBar.setAttribute('value', val)
        progressBar.innerHTML = val
      })

      upload.on('success', () => {
        addingFile.classList.add('hidden')
        uploadButton.classList.remove('hidden')
        uploadButton.setAttribute('value', "")
      })
    })

    uploadButton.addEventListener('change', (evt) => {
      file = evt.target.files[0]
    })
  }
}
