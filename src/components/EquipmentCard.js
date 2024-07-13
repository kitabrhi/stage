// src/components/EquipmentCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Image = styled.img`
    max-width: 150px; /* Set maximum width */
    width: 100%;
    height: auto; /* Maintain aspect ratio */
`;

const Label = styled.div`
    margin-top: 10px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
`;

const EquipmentCard = ({ image, label }) => {
    return (
        <Card>
            <Image src={process.env.PUBLIC_URL + '/' + image} alt={label} />
            <Label>{label}</Label>
        </Card>
    );
};

export default EquipmentCard;
