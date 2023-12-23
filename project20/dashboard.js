// Get the canvas element
var ctx = document.getElementById('myChart').getContext('2d');
    
// Create a chart
var myChart = new Chart(ctx, {
    type: 'pie', // Specify the type of chart (e.g., bar, line, pie)
    data: {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [{
            label: 'My Dataset',
            data: [10, 20, 15],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        // Additional options (e.g., scales, tooltips, legends)
    }
});