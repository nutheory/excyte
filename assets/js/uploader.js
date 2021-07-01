import Evaporate from 'evaporate';
import sparkMD5 from 'spark-md5';
import sha256 from 'js-sha256';

const uploader = Evaporate.create({
  signerUrl: '/uploader/auth',
  aws_key: 'AKIASBVQH255DCS427E5',
  bucket: 'excyte',
  awsRegion: 'us-west-1',
  computeContentMd5: true,
  cryptoMd5Method: (d) => btoa(sparkMD5.ArrayBuffer.hash(d, true)),
  cryptoHexEncodedHash256: sha256,
})

export const InitUploader = {
  mounted() {
    const uploadButton = this.el.querySelector('#file-field')
    uploadButton.addEventListener('change', (evt) => {
      uploader.then((evaporate) => {
        evaporate.add({
        file: evt.target.files[0],
        name: evt.target.files[0].name,
        progress: (progressValue) => console.log('Progress', progressValue),
        complete: (_xhr, awsKey) => console.log('Complete!', awsKey),
      }).then(
        (awsObjectKey) => console.log('File successfully uploaded to:', awsObjectKey),
        (reason) => console.log('File did not upload sucessfully:', reason)
      )
      })
    })
  }
}