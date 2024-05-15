document.addEventListener('DOMContentLoaded', (event) => {
    // Define riskPercentage antes de usarla
    const riskPercentage = 30; // Cambia este valor por el valor correcto según tu lógica

    const ctx = document.getElementById('myChart').getContext('2d');
    const data = {
        labels: ['Tu Riesgo', 'Mujeres de Tu Edad', 'Historial Familiar', 'Promedio General'],
        datasets: [{
            label: 'Porcentaje de Riesgo',
            data: [riskPercentage, 20, 50, 10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    // Crear la gráfica
    const myChart = new myChart(ctx, config);
});
