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
        'rgba(243, 244, 246, 1)', 'rgba(14, 116, 144, 1)', 'rgba(4, 41, 58, 1)',
        'rgba(254, 240, 138, 1)', 'rgba(71, 85, 105, 1)', 'rgba(233, 30, 99, 1)',
        'rgba(137, 254, 159, 1)'
      ],
      components: {
        preview: true,
        opacity: true,
        hue: true,
        interaction: {
          hex: true,
          rgba: true,
          hsla: true,
          cmyk: true,
          input: true,
          clear: true,
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