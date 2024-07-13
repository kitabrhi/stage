import React from 'react';
import Equipment from '../../components/Equipment';
import truckIcon from '../../components/truck_icon.png'; // Adjust the path based on your directory structure
import './AvailabilityDashboard.css'; // Ensure this is imported for styling

const AvailabilityDashboard = () => {
    const equipments = [
        { name: 'Foreuse Epiroc A99', percentage: 35 },
        { name: 'Foreuse Epiroc T45', percentage: 99 },
        { name: 'Foreuse Epiroc T35', percentage: 70 },
        { name: 'Pelle CAT 999', percentage: 95 },
        { name: 'Pelle CAT 15', percentage: 99 },
        { name: 'Foreuse Epiroc E50', percentage: 70 },
        { name: 'Pelle CAT 374', percentage: 95 },
        { name: 'Pelle CAT 90', percentage: 50 },

    ];

    return (
        <div className="availability-dashboard">
            <div className="content">
                <div className="dashboard-container">
                    <div className="header">
                        <img src={truckIcon} alt="Truck Icon" className="truck-icon" />
                        Disponibilité Engine GMC
                    </div>
                    {equipments.map((equipment, index) => (
                        <Equipment key={index} name={equipment.name} percentage={equipment.percentage} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AvailabilityDashboard;
