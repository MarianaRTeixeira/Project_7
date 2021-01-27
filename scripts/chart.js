
const traffic = document.getElementById('traffic-chart').getContext('2d');
const dailyCanvas = document.getElementById('daily-chart');
const mobileCanvas = document.getElementById('mobile-chart');


// TRAFFIC CHART
var firstGraph = new Chart(traffic, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
            backgroundColor: 'rgb(226, 227, 244)',
            borderColor: 'rgb(145, 149, 207)',
            borderWidth: 1,
            lineTension: 0
        }]
    },

    // Configuration options go here
    options: {
        maintainAspectRatio: true,
        
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false
        },
        responsive: true
    }
})

// DAILY CHART
const dailyData = new Chart(dailyCanvas, {
    // The type of chart we want to create 
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: "# of hits",
            data: [75, 115, 175, 125, 225, 200, 100],
            backgroundColor: '#7477bf',
            borderWidth: 1
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
})

// MOBILE CHART
const mobileData = new Chart(mobileCanvas, {
    // The type of chart we want to create 
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ["Desktop", "Tablet", "Phones"],
        datasets: [{
            label: "# of Users",
            data: ['2000', '550', '500'],
            borderWidth: 0,
            backgroundColor: [
                '#7477bf',
                '#78cf82',
                '51b6c8'
            ]
        }],
        // Configuration options go here
        options: {
            legend: {
                position: 'right',
                label: {
                   boxWidth: 20,
                   fontStyle: 'bold'
                }
            }
        }
    }
})
