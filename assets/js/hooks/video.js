import videojs from '@mux/videojs-kit'
import '@mux/videojs-kit/dist/index.css'

export const VideoInitialize = {
  mounted() {
    const streamId = this.el.dataset.streamId
    const videoPlayerId = this.el.dataset.playerId
    const video = this.el.querySelector(`#${videoPlayerId}`)

    const player = videojs(video, {
      "timelineHoverPreviews": true,
      "plugins": {
        "mux": {
          "data": {
            "env_key": "8annq75bglotovm9k0asdh112",
            "video_title": "My Great Video"
          }
        }
      }
    })
    player.src({ type: 'video/mux', src: streamId })
  }
}