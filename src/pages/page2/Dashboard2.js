import React from 'react';
import ApexChartsContainer from './ApexChartsContainer';

const Dashboard2 = () => {
    return (
        <div className="dashboard">
            <div className="navbar">
                <div className="logo">
                    <img src="/path/to/logo.png" alt="Logo" />
                </div>
            </div>
            <div className="charts-grid">
                <div className="chart div1">
                    {/* Chart 1 */}
                    <ApexChartsContainer />
                </div>
            </div>
            {/* Ajoutez votre tableau ou d'autres composants ici */}
        </div>
    );
};

export default Dashboard2;

