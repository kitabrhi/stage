import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Cash Flow',
                data: [1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07,
                    5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 350
                },
                plotOptions: {
                    bar: {
                        colors: {
                            ranges: [{
                                from: -100,
                                to: -46,
                                color: '#ffffff'
                            }, {
                                from: -45,
                                to: 0,
                                color: '#65fe19'
                            }]
                        },
                        columnWidth: '80%',
                    }
                },
                dataLabels: {
                    enabled: false,
                },
                yaxis: {
                    title: {
                        text: 'Growth',
                    },
                    labels: {
                        formatter: function (y) {
                            return y.toFixed(0) + "%";
                        },
                        style: {
                            colors: '#ffffff',
                        }
                    }
                },
                xaxis: {
                    type: 'datetime',
                    categories: [
                        '2024-01-01', '2024-02-01', '2024-03-01', '2024-04-01', '2024-05-01', '2024-06-01',
                        '2024-07-01', '2024-08-01', '2024-09-01', '2024-10-01', '2024-11-01', '2024-12-01',
                        '2025-01-01', '2025-02-01', '2025-03-01', '2025-04-01', '2025-05-01', '2025-06-01',
                        '2025-07-01', '2025-08-01', '2025-09-01', '2025-10-01', '2025-11-01', '2025-12-01',
                    ],
                    labels: {
                        rotate: -90,
                        style: {
                            colors: '#ffffff'
                        }
                    }
                }
            },
        };
    }

    render() {
        return (
            <div style={{
                width: '427px',
                height: '312px',
                top: '3094px',
                left: '470px',
                gap: '19px',
                borderRadius: '24px 0px 0px 0px',
                border: '2px 0px 0px 0px',
                // position: 'absolute',
            }}>
                <div id="chart">
                    <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
                </div>
                <div id="html-dist"></div>
            </div>
        );
    }
}

export default ApexChart;
