import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const HistogramChart = () => {
    const data = {
        labels: ['0-10', '10-20', '20-30', '30-40', '40-50'],
        datasets: [
            {
                label: 'Histogram',
                data: [10, 20, 30, 40, 50],
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Histogram Chart',
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
                    color: '#fff', // X-axis label color
                }
            },
            y: {
                ticks: {
                    color: '#fff', // Y-axis label color
                }
            }
        }
    };

    return <Bar data={data} options={options} />;
};

export default HistogramChart;
