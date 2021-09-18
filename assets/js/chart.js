import Chart from 'chart.js/auto'

export const synopsisChart = () => {
  const canvas = document.getElementById('synopsisChart')
  const d = JSON.parse(canvas.dataset.chart)
  const listings = d.listings.filter(l => l.dom && l.list && l.label ? true : false)
  Chart.defaults.color = d.attrs.header_text
  
  const chart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: listings.map(d => d.label),
      datasets: [{
        label: 'List Price',
        data: listings.map(d => d.list),
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