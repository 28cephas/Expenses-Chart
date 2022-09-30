const myChart = document.getElementById('myChart').getContext('2d')

const data = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48]
const backgroundColor = []

for(i = 0; i < data.length; i++){
    if(data[i] < 50){
        backgroundColor.push('hsl(10, 79%, 65%)')
    }else{
        backgroundColor.push('hsl(186, 34%, 60%)')
    }
}

const barChart = new Chart(myChart, {
    type: 'bar', 
    data: {
        labels: ['mon','tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
        datasets: [{
            data: data,
            backgroundColor: backgroundColor,
            borderWidth: 1,
            borderHeight: 1,
            borderRadius: 5,
            borderSkipped: false,

            // hoverBackgroundColor: 'hsl(28, 10%, 53%)'
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                yAlign: 'bottom',
                displayColors: false,
                callbacks: {
                    title: function(e){
                        ''
                    }
                }
            }
        },
        scales: {
            x: {
                display: true,
                grid: {
                    display: false,
                    borderWidth: 0,
                    lineWidth: 0
                }
            },
            y: {
                display: false,
                grid: {
                    display: false,
                }
            }
        },

        onHover: (event, chartElement) => {
            if(chartElement.length == 1){
                event.native.target.style.cursor = 'pointer'
            }else{
                event.native.target.style.cursor = ''
            }
        }
    }
})