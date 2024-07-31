const ctx = document.getElementById('myChart');
const textInfo = document.querySelector('.info');

let chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [],
    datasets: [{
      label: 'CPU',
      data: [],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        suggestedMin: 0,
        suggestedMax: 100
      }
    }
  }
});