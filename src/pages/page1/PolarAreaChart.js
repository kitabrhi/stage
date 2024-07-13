import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const PolarAreaChart = () => {
    const data = {
        labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
        datasets: [
            {
                label: 'My Dataset',
                data: [11, 16, 7, 3, 14],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 205, 86, 0.6)',
                    'rgba(201, 203, 207, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                ],
                hoverBackgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 205, 86, 1)',
                    'rgba(201, 203, 207, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
            },
        ],
    };

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Polar Area Chart',
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
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div style={{
            width: '427px',
            height: '312px',
            position: 'absolute',
            top: '394px',
            left: '1071px',
            borderRadius: '24px 0px 0px 0px',
            border: '2px solid transparent',
            opacity: 1,
            overflow: 'hidden'
        }}>
            <PolarArea data={data} options={options} />
        </div>
    );
};

export default PolarAreaChart;
