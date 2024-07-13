    import React from 'react';
    import LineChart from './LineChart';
    import BarChart from './BarChart';
    import ScatterPlot from './ScatterPlot';
    import DoughnutChart from './DoughnutChart';
    import PieChart from './PieChart';
    import RadarChart from './RadarChart';
    import BubbleChart from './BubbleChart';
    import AvailabilityDashboard from './AvailabilityDashboard';
    import './Dashboard.css';
    import  logo from './logo.png';

    const data = [
        { numero: 1, quantite: 3000, zone: 'A', mineral: 1200, sterile: 1800 },
        { numero: 2, quantite: 4000, zone: 'B', mineral: 1600, sterile: 2400 },
        { numero: 3, quantite: 5000, zone: 'C', mineral: 2000, sterile: 3000 },
        { numero: 4, quantite: 6000, zone: 'D', mineral: 2400, sterile: 3600 },
        { numero: 5, quantite: 7000, zone: 'E', mineral: 2800, sterile: 4200 },
    ];

    const Dashboard = () => {
        return (
            <div className="dashboard">
                <nav className="navbar">
                    <div className="logo">
                        <img src={logo} alt="Logo"/>
                    </div>
                </nav>

                <div className="charts-grid">
                    <div className="chart div1 box-e"><LineChart/></div>
                    <div className="chart div2 box-e"><BarChart/></div>
                    <div className="chart div3 box-e"><ScatterPlot/></div>
                    <div className="chart div4 box-e"><DoughnutChart/></div>
                    <div className="chart div5 box-e"><PieChart/></div>
                    <div className="chart div6 box-e"><RadarChart/></div>
                    <div className="chart div7 box-e"><AvailabilityDashboard/></div>
                    <div className="chart div8 box-e"><BubbleChart/></div>
                    <div className="chart div9 box-e table">
                        {/*<center><h4 className="text">Suivis des Tirs</h4></center>*/}
                        <table>
                            <thead>
                            <tr>
                                <th className="table-header">Numéro de Tir</th>
                                <th className="table-header">Quantité</th>
                                <th className="table-header">Zone de Tir</th>
                                <th className="table-header">Tonnes Minéral</th>
                                <th className="table-header">Tonnes Stérile</th>
                                <th className="table-header">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {data.map((item) => (
                                <tr key={item.numero}>
                                    <td>{item.numero}</td>
                                    <td>{item.quantite}</td>
                                    <td>{item.zone}</td>
                                    <td>{item.mineral}</td>
                                    <td>{item.sterile}</td>
                                    <td><button>Modifier</button></td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        );
    };

    export default Dashboard;
