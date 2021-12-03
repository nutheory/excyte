import Chart from 'chart.js/auto'

export const ClosedListingsChart = {
  mounted() {
    const canvas = this.el
    const d = JSON.parse(canvas.dataset.chart)
    const t = JSON.parse(canvas.dataset.theme)
    const listings = d.listings
    Chart.defaults.color = t.text
    const chart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: listings.map(lst => lst.label),
        datasets: [{
          label: 'List Price',
          data: listings.map(lst => lst.list),
          backgroundColor: t.list,
        }, {
          label: 'Close Price',
          data: listings.map(lst => lst.close),
          backgroundColor: t.close,
        }]
      },
      options: {
        scales: {
          y: {
            min: d.min,
            max: d.max,
          }
        },
        plugins: {
          legend: {
            labels: {
              font: {
                size: 14
              }
            }
          }
        }
      }
    })
  }
}