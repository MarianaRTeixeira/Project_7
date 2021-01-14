const traffic = document.getElementById('traffic-chart').getContext('2d');
var daily = document.getElementById('daily-chart').getContext('2d');


var first = new Chart(traffic, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['16-22', '23-29','30-5','6-12','13-19','20-26', '27-3', '4-10','11-17', '18-24','25-31'],
        datasets: [{
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
            backgroundColor: 'rgb(226, 227, 244)',
            borderColor: 'rgb(145, 149, 207)',
            borderWidth:1,

            lineTension: 0
        }]
    },

    // Configuration options go here
    options: {
        
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false
        }
        
    }
} )

// var second = new Chart(daily, {