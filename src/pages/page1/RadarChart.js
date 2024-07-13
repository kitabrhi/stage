import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [
                {
                    name: 'Actual',
                    data: [
                        {
                            x: '2023',
                            y: 75,
                            goals: [
                                {
                                    name: 'Expected',
                                    value: 80,
                                    strokeWidth: 2,
                                    strokeDashArray: 2,
                                    strokeColor: '#775DD0'
                                }
                            ]
                        },
                        {
                            x: '2024',
                            y: 85,
                            goals: [
                                {
                                    name: 'Expected',
                                    value: 90,
                                    strokeWidth: 5,
                                    strokeHeight: 10,
                                    strokeColor: '#775DD0'
                                }
                            ]
                        }
                    ]
                }
            ],
            options: {
                chart: {
                    height: 350,
                    type: 'bar'
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        dataLabels: {
                            position: 'center', // Align data labels to center of bars
                            style: {
                                    colors: ['#black'] // White color for data labels
                            }
                        }
                    }
                },
                colors: ['#f1bf06'],
                dataLabels: {
                    enabled: true,
                    formatter: function(val) {
                        return val.toFixed(0); // Format numbers without decimal places
                    }
                },
                legend: {
                    show: true,
                    showForSingleSeries: true,
                    customLegendItems: ['Actual', 'Expected'],
                    markers: {
                        fillColors: ['#f6f8f7', '#f1bf06']
                    },
                    xaxis: {
                        type: 'datetime',
                        categories: ['2023', '2024'], // Example date categories
                        labels: {
                            style: {
                                colors: 'black' // White color for X-axis labels
                            }
                        }
                    }
                }
            }
        };
    }

    render() {
        const containerStyle = {
            width: '427px',
            height: '312px',
            top: '420px',
            left: '950px',
            gap: '19px',
            borderRadius: '24px 0px 0px 0px',
            border: '2px 0px 0px 0px',
            // position: 'absolute' // Added position to place the chart based on top and left properties
        };

        return (
            <div style={containerStyle}>
                <div id="chart">
                    <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
                </div>
                <div id="html-dist"></div>
            </div>
        );
    }
}

export default ApexChart;
