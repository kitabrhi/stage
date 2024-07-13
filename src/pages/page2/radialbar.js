import React from 'react';
import ReactApexChart from 'react-apexcharts';

class RadialBarCharts extends React.Component {
    render() {
        return (
            <div className="radial-bar-charts">
                {/* Premier graphique radial */}
                <div className="radial-bar-chart">
                    <h2>Graphique 1</h2>
                    <ReactApexChart
                        options={{
                            chart: {
                                height: 350,
                                type: 'radialBar',
                            },
                            plotOptions: {
                                radialBar: {
                                    hollow: {
                                        size: '70%',
                                    },
                                },
                            },
                            labels: ['Cricket'],
                            colors: ['#008FFB'], // Couleur pour le premier graphique
                        }}
                        series={[70]}
                        type="radialBar"
                        height={350}
                    />
                </div>

                {/* Deuxième graphique radial */}
                <div className="radial-bar-chart">
                    <h2>Graphique 2</h2>
                    <ReactApexChart
                        options={{
                            chart: {
                                height: 350,
                                type: 'radialBar',
                            },
                            plotOptions: {
                                radialBar: {
                                    hollow: {
                                        size: '70%',
                                    },
                                },
                            },
                            labels: ['Football'],
                            colors: ['#00E396'], // Couleur pour le deuxième graphique
                        }}
                        series={[85]}
                        type="radialBar"
                        height={350}
                    />
                </div>

                {/* Troisième graphique radial */}
                <div className="radial-bar-chart">
                    <h2>Graphique 3</h2>
                    <ReactApexChart
                        options={{
                            chart: {
                                height: 350,
                                type: 'radialBar',
                            },
                            plotOptions: {
                                radialBar: {
                                    hollow: {
                                        size: '70%',
                                    },
                                },
                            },
                            labels: ['Tennis'],
                            colors: ['#FEB019'], // Couleur pour le troisième graphique
                        }}
                        series={[60]}
                        type="radialBar"
                        height={350}
                    />
                </div>
            </div>
        );
    }
}

export default RadialBarCharts;
