import Pickr from '@simonwep/pickr';

export const InitColorPicker = {
  mounted() {
    const currentColor = this.el.dataset.color 
    const id = this.el.dataset.id 
    
    const pickr = Pickr.create({
      el: '.color-picker',
      theme: 'nano',
      default: currentColor,
      swatches: [
        'rgba(0, 0, 0, 1)', 'rgba(68, 68, 68, 1)', 'rgba(138, 138, 138, 1)', 
        'rgba(200, 200, 200, 1)', 'rgba(240, 240, 240, 1)', 'rgba(255, 255, 255, 1)',   
        'rgba(252, 211, 99, 1)', 'rgba(245, 158, 11, 1)', 'rgba(220, 38, 38, 1)', 
        'rgba(153, 27, 27, 1)', 'rgba(13, 148, 136, 1)', 'rgba(8, 145, 178, 1)',
        'rgba(56, 189, 248, 1)', 'rgba(3, 105, 161, 1)'
      ],
      components: {
        preview: true,
        opacity: true,
        hue: true,
        interaction: {
          hex: true,
          rgba: true,
          hsla: false,
          cmyk: true,
          input: true,
          clear: false,
          save: true
        }
      }
    }) 

    pickr.on('save', (color, instance) => {
      const rgba = color.toRGBA()
      this.pushEventTo(`#${id}`, "update-color", { id, color: `rgba(${Math.round(rgba[0])}, ${Math.round(rgba[1])}, ${Math.round(rgba[2])}, ${rgba[3]})` }, 
        () => { instance.hide() }
      )
    })
  }
}