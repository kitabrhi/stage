import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [76],
            options: {
                chart: {
                    type: 'radialBar',
                    offsetY: -20,
                    sparkline: {
                        enabled: true
                    }
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -90,
                        endAngle: 90,
                        track: {
                            background: "#e7e7e7",
                            strokeWidth: '97%',
                            margin: 5,
                            dropShadow: {
                                enabled: true,
                                top: 2,
                                left: 0,
                                blur: 2
                            }
                        },
                        dataLabels: {
                            name: {
                                show: false
                            },
                            value: {
                                offsetY: -2,
                                fontSize: '22px',
                                color: '#ffffff' // Changer la couleur des valeurs en blanc
                            }
                        }
                    }
                },
                grid: {
                    padding: {
                        top: -10
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        shadeIntensity: 0.4,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 53, 91]
                    },
                },
                labels: ['Average Results'],
            },
        };
    }

    render() {
        const containerStyle = {
            width: '472px',
            height: '312px',
            top: '394px',
            left: '29px',
            gap: '19px',
            borderRadius: '24px 0px 0px 0px',
            border: '2px solid transparent', // Ajustez si nécessaire

        };

        return (
            <div style={containerStyle}>
                <h2 style={{ textAlign: 'center', marginBottom: '10px', color: 'white' }}>Radial Chart Title</h2>
                <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={300} />
                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                    <p>Détails supplémentaires des données</p>
                </div>
            </div>
        );
    }
}

export default ApexChart;
