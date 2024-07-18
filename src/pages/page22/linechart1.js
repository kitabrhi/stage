import React from 'react';
import ApexCharts from 'apexcharts';

const ApexChart = () => {
    React.useEffect(() => {
        // Configuration du graphique
        const options = {
            series: [{
                name: 'Series 1',
                data: [31, 40, 28, 51, 42, 109, 100],
                color: '#FF4560' // Couleur pour la série 'Series 1'
            }, {
                name: 'Series 2',
                data: [11, 32, 45, 32, 34, 52, 41],
                color: '#00E396' // Couleur pour la série 'Series 2'
            }],
            chart: {
                height: 350,
                type: 'area',
                zoom: {
                    enabled: true // Activer le zoom
                },
                toolbar: {
                    show: true, // Afficher la barre d'outils
                    tools: {
                        zoom: true,
                        zoomin: true,
                        zoomout: true,
                        reset: true
                    }
                }
            },
            dataLabels: {
                enabled: false // Désactiver les étiquettes de données
            },
            stroke: {
                curve: 'smooth', // Courbe lisse pour les lignes
                width: 2 // Largeur de la ligne
            },
            xaxis: {
                type: 'datetime',
                categories: [
                    "2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z",
                    "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z",
                    "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z",
                    "2018-09-19T06:30:00.000Z"
                ],
                labels: {
                    format: 'dd MMM HH:mm', // Format des étiquettes
                    style: {
                        colors: '#6c757d', // Couleur des étiquettes
                        fontSize: '12px' // Taille de la police
                    }
                }
            },
            yaxis: {
                title: {
                    text: 'Value', // Titre de l'axe Y
                    style: {
                        color: '#6c757d' // Couleur du titre
                    }
                },
                labels: {
                    style: {
                        colors: '#6c757d' // Couleur des étiquettes de l'axe Y
                    }
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    type: 'vertical',
                    shadeIntensity: 0.5,
                    gradientToColors: ['#00E396', '#FF4560'], // Dégradé de couleurs
                    inverseColors: false,
                    opacityFrom: 0.5,
                    opacityTo: 0.1,
                    stops: [0, 100] // Positions de dégradé
                }
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm' // Format de l'info-bulle
                },
                y: {
                    formatter: (val) => `${val}` // Formater les valeurs des tooltips
                }
            }
        };

        // Création et affichage du graphique
        const chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();

        // Nettoyage lors de la destruction du composant
        return () => {
            chart.destroy();
        };
    }, []);

    // Styles du conteneur du graphique
    const containerStyle = {
        width: '100%',
        height: '350px'
    };

    return <div id="chart" style={containerStyle}></div>;
};

export default ApexChart;
