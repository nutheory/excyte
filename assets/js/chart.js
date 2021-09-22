import Chart from 'chart.js/auto'

export const synopsisChart = () => {
  const canvas = document.getElementById('synopsisChart')
  const d = JSON.parse(canvas.dataset.chart)
  let labels = []
  let listings = []
  for (const [key, value] of Object.entries(d.groups)) {
    console.log("DDDD", key)
    console.log("DDDD", value)
    labels = labels.concat(key)
    listings = listings.concat(value)
  }
  Chart.defaults.color = d.attrs.header_text
  
  console.log("labels", labels)
  console.log("listings", listings)

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
        data: listings.map(d => d.close),
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