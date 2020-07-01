const lightGraphCol = (rating: number): string => {
  if (rating >= 3000) return '#644'
  if (rating >= 2600) return '#B44'
  if (rating >= 2400) return '#D66'
  if (rating >= 2300) return '#FA4'
  if (rating >= 2100) return '#FF9'
  if (rating >= 1900) return '#F9E'
  if (rating >= 1600) return '#C7F'
  if (rating >= 1400) return '#6DD'
  if (rating >= 1200) return '#6D6'
  return '#CCC'
}

const darkGraphCol = (rating: number): string => {
  if (rating >= 3000) return '#000'
  if (rating >= 2600) return '#F33'
  if (rating >= 2400) return '#D22'
  if (rating >= 2300) return '#F933'
  if (rating >= 2100) return '#FF0'
  if (rating >= 1900) return '#F77F'
  if (rating >= 1600) return '#C0F'
  if (rating >= 1400) return '#0FF'
  if (rating >= 1200) return '#0F0'
  return '#EEE'
}

export default {
  handle: 'my99n',
  color: {
    light: lightGraphCol,
    dark: darkGraphCol,
  },
  inputBg: {
    light: '#FFF',
    dark: '#444',
  },
  chartOptions: {
    light: {
      scaleFontColor: '#aaa',
      legend: { display: false },
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            ticks: { fontColor: '#aaa' },
            gridLines: {
              color: '#aaa',
              borderDash: [1, 3],
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              display: false,
            },
          },
        ],
      },
    },
    dark: {
      legend: { display: false },
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            ticks: { fontColor: '#ddd' },
            gridLines: {
              color: '#ddd',
              borderDash: [1, 3],
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              display: false,
            },
          },
        ],
      },
    },
  },
}
