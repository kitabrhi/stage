// src/components/EquipmentCard.js
import React from 'react';
import './EquipmentCard.css';

const EquipmentCard = ({ image, label }) => {
    return (
        <div className="equipment-card">
            <img src={image} alt={label} />
            <div className="label">{label}</div>
        </div>
    );
};


export default EquipmentCard;