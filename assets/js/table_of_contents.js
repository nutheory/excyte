export const TableOfContents = {
  mounted() {
    const viewer = document.querySelector('#viewerWrapper')

    const observer = new IntersectionObserver(sections => {
      sections.forEach(section => {
        if (section.isIntersecting === true) {
          const id = section.target.getAttribute("id")
          window.history.replaceState(null, null, `#${id}`)
        }
      })
    }, { threshold: [0], rootMargin: `-50% 0px` })

    this.handleEvent('jumpTo', ({ id }) => {
      const el = this.el.querySelector(`#${id}`)
      el.scrollIntoView({behavior: "smooth"})
    })
  }
}