import axios from 'axios'

window.LocationAutocomplete = () => {
  return {
    cursorIndex: -1,
    activeSuggestion: null,
    inputValue: "",
    active: true,
    suggestions: [],
    query: "",
    updateSuggestions: async function (data) {
      this.query = data;
      if (this.query.length < 3) {
        this.suggestions = []
      } else {
        axios.get(`https://parser-external.geo.moveaws.com/suggest?client_id=rdc-x&input=${encodeURIComponent(this.query)}`)
          .then(res => {
            this.suggestions = res.data.autocomplete
              .filter(loc => loc.area_type === "address")
              .map(loc => {
                return { 
                  geo: loc.centroid, 
                  id: loc.mpr_id, 
                  address: `${loc.line}, ${loc.city}, ${loc.state_code}, ${loc.postal_code}`, 
                  parsed: {
                    addr: loc.line,
                    city: loc.city,
                    state: loc.state_code,
                    zip: loc.postal_code
                  }
                }
              })
              .slice(0, 6)
          })
      }
      // this.suggestions = locs;
    },
    getThis: function () {
      let t = this;
      return t;
    },
    getRefs(which) {
      return this.$refs[which];
    },
    moveUpList() {
      if (this.suggestions.length === 0) {return true}
      // Move up the list if there is a list and we're not at the top already.
      if (this.suggestions.length > 0 && this.cursorIndex > 0) {
        // Decrement cursorIndex.
        this.cursorIndex--;

        // Remove active status from any other suggestion.
        let oldActive = this.suggestions.find(
          (suggestion) => suggestion.active
        );
        if (oldActive) {
          oldActive.active = false;
        }

        // Add active status to suggestion at cursorIndex.
        this.suggestions[this.cursorIndex].active = true;
        this.inputValue = this.suggestions[this.cursorIndex].address;
        // console.log(this.suggestions[this.cursorIndex].item.title);
      } else {
        this.suggestions[this.cursorIndex].active = false
        this.cursorIndex = -1
        this.inputValue = this.query
      }
    },
    moveDownList() {
      if (this.suggestions.length === 0) {return true}
      if (this.active === false) {return true}
      // Move down the list only if there is room on the list to move down.
      if (
        this.suggestions.length > 0 &&
        this.cursorIndex < this.suggestions.length - 1
      ) {
        // Just increment the cursorIndex.
        this.cursorIndex++;

        // Remove active status from any other suggestion.
        let oldActive = this.suggestions.find(
          (suggestion) => suggestion.active
        );
        if (oldActive) {
          oldActive.active = false;
        }
        // console.log(this.suggestions[this.cursorIndex].item.title);
        this.suggestions[this.cursorIndex].active = true;
        this.inputValue = this.suggestions[this.cursorIndex].address;
      } else {
        this.suggestions[this.cursorIndex].active = false
        this.cursorIndex = -1
        this.inputValue = this.query
      }
    }
  };
};

export const AutocompleteLocation = {
  mounted() {
    window.LocationAutocompleteHook = this
  }
}