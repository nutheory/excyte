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
      const el = document.querySelector(`#${id}`)
      el.scrollIntoView({behavior: "smooth"})
    })
    console.log("run", viewer)

    setTimeout(() => {
      const els = viewer.querySelectorAll('.section')

      console.log("TO", els)
      const sections = Array.prototype.slice.call(els).map((el) => {
        return {
          id: el.getAttribute("id"),
          title: el.dataset.sectionTitle,
          subtitle: el.dataset.sectionSubtitle
        }
      })

      this.pushEventTo(this.el, 'setup-toc', { sections }, () => {
        els.forEach(section => {
          observer.observe(section)
        })
      })
    }, 500)
  }
}