import Sortable from "sortablejs"

export const InitSortable = {
  mounted() {
    const callback = sections => {
      this.pushEventTo(this.el.dataset.targetId, "sort", { sections: sections })
    };
    init(this.el, callback)
  }
};

const init = (sortableList, callback) => {
  const sectionsId = sortableList.dataset.sectionsId

  const sortable = new Sortable(sortableList, {
    group: "shared",
    handle: ".grabbable",
    dragClass: "shadow-xl",
    touchStartThreshold: 6,
    fallbackOnBody: true,
    swapThreshold: 0.65,
    onSort: evt => {
      let ids = []
      const nodeList = sortableList.querySelectorAll("[data-sortable-id]")
      for (let i = 0; i < nodeList.length; i++) {
        const idObject = { id: nodeList[i].dataset.sortableId, sections_id: sectionsId, position: i }
        ids.push(idObject)
      }
      callback(ids)
    }
  });
};