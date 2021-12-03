import Sortable from "sortablejs"

export const InitSectionSortable = {
  mounted() {
    const callback = sections => {
      this.pushEventTo(this.el.dataset.targetId, "sort-sections", { sections: sections })
    };
    sections(this.el, callback)
  }
};

export const InitListingSortable = {
  mounted() {
    const callback = listings => {
      this.pushEventTo(this.el.dataset.targetId, "sort-listings", { listings: listings })
    };
    listings(this.el, callback)
  }
};

const sections = (sortableList, callback) => {
  const sectionsId = sortableList.dataset.sectionsId
  const sortable = new Sortable(sortableList, {
    group: "sections",
    handle: ".grabbable",
    dragClass: "shadow-xl",
    touchStartThreshold: 6,
    fallbackOnBody: true,
    swapThreshold: 0.65,
    onSort: evt => {
      let list = []
      const nodeList = sortableList.querySelectorAll("[data-sortable-id]")
      for (let i = 0; i < nodeList.length; i++) {
        const idObject = { id: nodeList[i].dataset.sortableId, sections_id: sectionsId, position: i }
        list.push(idObject)
      }
      callback(list)
    }
  });
};

const listings = (sortableList, callback) => {
  const listingsId = sortableList.dataset.listingsId
  const sortable = new Sortable(sortableList, {
    group: "listings",
    handle: ".grabbable",
    dragClass: "shadow-xl",
    touchStartThreshold: 6,
    fallbackOnBody: true,
    swapThreshold: 0.65,
    onSort: evt => {
      let list = []
      const nodeList = sortableList.querySelectorAll("[data-listable-id]")
      for (let i = 0; i < nodeList.length; i++) {
        const idObject = { id: nodeList[i].dataset.listableId, listings_id: listingsId, position: i }
        list.push(idObject)
      }
      callback(list)
    }
  });
};