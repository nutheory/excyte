import Evaporate from 'evaporate';
import sparkMD5 from 'spark-md5';
import sha256 from 'js-sha256';

const uploader = Evaporate.create({
  signerUrl: '/uploader/auth',
  aws_key: 'AKIASBVQH255LGD2MBPU',
  bucket: 'excyte',
  awsRegion: 'us-west-1',
  aws_url: 'https://s3.us-west-1.amazonaws.com',
  maxConcurrentParts: 8,
  computeContentMd5: true,
  cryptoMd5Method: (d) => btoa(sparkMD5.ArrayBuffer.hash(d, true)),
  cryptoHexEncodedHash256: sha256,
})

export const InitUploader = {
  mounted() {
    const uploadButton = this.el.querySelector('#file-field')
    const addedFile = this.el.querySelector('#added-file')
    const fileName = this.el.querySelector('#filename')
    const progressBar = this.el.querySelector('#upload-progress')
    let s3Key = ""
    this.handleEvent("idDetails", ({uuid, aid, bid}) => {
      s3Key = `${aid}_${uuid}`
    })

    uploadButton.addEventListener('change', (evt) => {
      let file = evt.target.files[0]
      let ts = Math.round((new Date()).getTime() / 1000)
      uploader.then((evaporate) => {
        evaporate.add({
          file: file,
          name: `videos/${s3Key}_${ts}`,
          started: (s3Id) => {
            uploadButton.classList.remove('action')
            uploadButton.classList.add('hidden')
            addedFile.classList.remove('hidden')
            fileName.innerHTML = file.name
          },
          progress: (progressValue) => {
            let val = Math.round(progressValue * 100)
            progressBar.setAttribute('value', val)
            console.log("VAL", val)
            progressBar.innerHTML = val
          },
          complete: (_xhr, awsKey) => {
            console.log('Complete!', awsKey)
          },
        }).then(
          (awsObjectKey) => {
            const payload = {
              url: awsObjectKey,
              name: file.name,
              size: file.size, 
              type: file.type
            }
            this.pushEvent("uploaded-asset", payload, (reply, ref) => {
              console.log("REPLY", reply)
            })
          },
          (reason) => console.log('File did not upload sucessfully:', reason)
        )
      })
    })
  }
}