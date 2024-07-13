import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ApexChartsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series1: [70],
            series2: [60],
            series3: [50],
            options: {
                chart: {
                    height: 200,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '70%',
                        },
                    },
                },
                labels: ['Chart 1'],
            },
        };
    }

    render() {
        return (
            <div className="chart-container">
                <div className="chart">
                    <ReactApexChart options={this.state.options} series={this.state.series1} type="radialBar" height={150} />
                </div>
                <div className="chart">
                    <ReactApexChart options={this.state.options} series={this.state.series2} type="radialBar" height={150} />
                </div>
                <div className="chart">
                    <ReactApexChart options={this.state.options} series={this.state.series3} type="radialBar" height={150} />
                </div>
            </div>
        );
    }
}

export default ApexChartsContainer;
