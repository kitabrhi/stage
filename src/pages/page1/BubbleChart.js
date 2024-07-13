import React from 'react';
import { Bubble } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
} from 'chart.js';

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement
);

const BubbleChart = () => {
    const containerStyle = {
        width: '398px',
        height: '336px',
        top: '800px',
        left: '900px',
        gap: '19px',
        borderRadius: '24px 0px 0px 0px',
        border: '2px solid transparent', // Ensure to adjust if necessary
        // position: 'absolute', // Ensure the chart is positioned correctly
    };

    const data = {
        datasets: [
            {
                label: 'Bubble Dataset',
                data: [
                    { x: 10, y: 20, r: 10 },
                    { x: 15, y: 25, r: 15 },
                    { x: 30, y: 35, r: 20 },
                    { x: 45, y: 50, r: 25 },
                    { x: 60, y: 65, r: 30 },
                ],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
            },
        ],
    };

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Bubble Chart',
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
            y: {
                ticks: {
                    color: '#fff', // Text color
                },
            },
            x: {
                ticks: {
                    color: '#fff', // Text color
                },
            },
        },
    };

    return (
        <div style={containerStyle}>
            <Bubble data={data} options={options} />
        </div>
    );
};

export default BubbleChart;
