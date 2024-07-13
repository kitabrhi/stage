import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import './LineChart.css'; // Assurez-vous que le chemin est correct

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineChart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sales',
                data: [65, 59, 80, 81, 56, 55, 40],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
            {
                label: 'Expenses',
                data: [35, 49, 60, 41, 36, 25, 70],
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
            },
        ],
    };

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Line Chart',
                color: '#fff', // Text color
                font: {
                    size: 16,
                    weight: 'bold'
                }
            },
            legend: {
                labels: {
                    color: '#fff' // Text color
                }
            },
            tooltip: {
                callbacks: {
                    labelColor: function(tooltipItem, chart) {
                        return {
                            borderColor: 'rgba(255, 255, 255, 0.8)',
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            color: '#000',
                            borderWidth: 1,
                        };
                    }
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#fff' // X-axis labels color
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)' // X-axis grid color
                }
            },
            y: {
                ticks: {
                    color: '#fff' // Y-axis labels color
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)' // Y-axis grid color
                }
            }
        }
    };

    return (
        <div className="line-chart-container">
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;
