import Chart from 'chart.js/auto'

export const synopsisChart = () => {
  const canvas = document.getElementById('closedListingsChart')
  const d = JSON.parse(canvas.dataset.chart)
  const listings = d.listings
  console.log("LSTINGS", listings)
  // for (const [key, value] of Object.entries(d.groups)) {
  //   labels = labels.concat(key)
  //   listings = listings.concat(value)
  // }
  Chart.defaults.color = d.attrs.header_text

  const chart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: listings.map(lst => lst.label),
      datasets: [{
        label: 'List Price',
        data: listings.map(lst => lst.list),
        backgroundColor: d.attrs.accent,
      }, {
        label: 'Close Price',
        data: listings.map(lst => lst.close),
        backgroundColor: d.attrs.link,
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