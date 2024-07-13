// src/components/Equipment.js
import React from 'react';
import './Equipment.css'; // Assurez-vous de créer ce fichier CSS
import truckIcon from './truck_icon.png'; // Ajustez le chemin en fonction de votre structure de répertoire


const Equipment = ({ name, percentage }) => {
    return (
        <div className="equipment">
            <img src={truckIcon} alt="Truck Icon" className="truck-icon"/>
            <div className="details">
                <div className="equipment-name">{name}</div>
                <div className="progress-container">
                    <div className="progress" style={{ width: `${percentage}%` }}>{percentage}%</div>
                </div>
            </div>
        </div>
    );
};

export default Equipment;
