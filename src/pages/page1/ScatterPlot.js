import React from 'react';
import { Scatter } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import './ScatterPlot.css'; // Assurez-vous que le chemin est correct

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend
);

const ScatterPlot = () => {
    const data = {
        datasets: [
            {
                label: 'Scatter Dataset',
                data: Array.from({ length: 20 }, () => ({
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                })),
                backgroundColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Scatter Plot',
                color: '#fff', // Couleur du texte du titre
                font: {
                    size: 16,
                    weight: 'bold'
                }
            },
            legend: {
                labels: {
                    color: '#fff' // Couleur du texte de la légende
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
                type: 'linear',
                position: 'bottom',
                ticks: {
                    color: '#fff' // Couleur du texte des ticks sur l'axe x
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)' // Couleur de la grille sur l'axe x
                }
            },
            y: {
                ticks: {
                    color: '#fff' // Couleur du texte des ticks sur l'axe y
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)' // Couleur de la grille sur l'axe y
                }
            }
        }
    };

    return (
        <div className="scatter-plot-container">
            <Scatter data={data} options={options} />
        </div>
    );
};

export default ScatterPlot;
