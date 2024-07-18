import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const ApexChart = () => {

    useEffect(() => {
        // Options du graphique
        const options = {
            series: [{
                name: 'Net Profit',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
                color: '#00E396' // Couleur pour la série 'Net Profit'
            }, {
                name: 'Revenue',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
                color: '#FEB019' // Couleur pour la série 'Revenue'
            }, {
                name: 'Free Cash Flow',
                data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
                color: '#FF4560' // Couleur pour la série 'Free Cash Flow'
            }],
            chart: {
                type: 'bar',
                height: 350,
                toolbar: {
                    show: false // Masquer la barre d'outils si nécessaire
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                labels: {
                    style: {
                        colors: '#ffffff' // Couleur des étiquettes de l'axe X en blanc
                    }
                }
            },
            yaxis: {
                title: {
                    text: '$ (thousands)',
                    style: {
                        color: '#ffffff' // Couleur du titre de l'axe Y en blanc
                    }
                },
                labels: {
                    style: {
                        colors: '#ffffff' // Couleur des étiquettes de l'axe Y en blanc
                    }
                }
            },
            fill: {
                colors: ['#00E396', '#FEB019', '#FF4560'] // Utilisation de couleurs vives pour les séries
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands"
                    },
                    style: {
                        color: '#ffffff' // Couleur du texte du tooltip en blanc
                    }
                }
            }
        };

        // Création et rendu du graphique
        const chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();

        // Nettoyage lors de la destruction du composant
        return () => {
            chart.destroy();
        };
    }, []);

    // Styles pour le conteneur du graphique
    const containerStyle = {
        width: '612px',
        height: '312px',
        top: '68px',
        left: '654px',
        gap: '19px',
        borderRadius: '24px 0px 0px 0px',
        border: '2px solid transparent', // Ajuster si nécessaire
    };

    return <div id="chart" style={containerStyle}></div>;
};

export default ApexChart;
