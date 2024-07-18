import React from 'react';
import LineChart from './LineChart';
import DoughnutChart from './DoughnutChart';
import BubbleChart from './BubbleChart';
import AvailabilityDashboard from './AvailabilityDashboard';
import './Dashboard222.css';
import logo from './logo.png';
import Linechart1 from './linechart1'; // Assurez-vous que le fichier existe et est correctement exporté

const Dashboard222 = () => {
    return (
        <div className="dashboard222">
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
            </nav>

            <div className="charts-grid">
                <div className="chart div111 box-e"><LineChart /></div>
                <div className="chart div44 box-e"><DoughnutChart /></div>
                <div className="chart div77 box-e"><AvailabilityDashboard /><AvailabilityDashboard /></div>
                <div className="chart div88 box-e"><BubbleChart /></div>
                <div className="chart div222 box-e"><Linechart1 /></div>

            </div>
        </div>
    );
};

export default Dashboard222;
