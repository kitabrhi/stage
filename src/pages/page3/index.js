// src/pages/Page3.js
import React from 'react';
import './Page3.css';  // Supposons que ce fichier contient vos styles CSS

// Données d'exemple pour les cartes d'équipement
const equipmentData = [
    { image: 'images/img1.png', label: 'FORATION JUMBO M20', className: 'img1', title: 'Titre Image 1' },
    { image: 'images/img2.png', label: 'FORATION SIMBA E70S', className: 'img2', title: 'Titre Image 2' },
    { image: 'images/img3.png', label: 'CHARGEMENT EXPLOSIF & TIR (ENGINS)', className: 'img3', title: 'Titre Image 3' },
    { image: 'images/img4.png', label: 'DÉBLAYAGE R1700', className: 'img4', title: 'Titre Image 4' },
    { image: 'images/img5.png', label: 'SOUTÈNEMENT BOLTEC M10', className: 'img5', title: 'Titre Image 5' },
    { image: 'images/img6.png', label: 'TRANSPORT AD45', className: 'img6', title: 'Titre Image 6' }
];

const Page3 = () => {
    return (
        <div className="app" role="main">
            <div className="grid-container" role="grid">
                {equipmentData.map((item, index) => (
                    <div key={index} className="grid-item" role="gridcell">
                        <img
                            src={process.env.PUBLIC_URL + '/' + item.image}
                            alt={item.label}
                            title={item.title}
                            className={item.className}
                        />
                        <div className="equipment-label">{item.label}</div>
                    </div>
                ))}
            </div>
            <div className="center-bottom">
                <img src={process.env.PUBLIC_URL + '/images/img7.png'} alt="Center Bottom" />
            </div>
        </div>
    );
};

export default Page3;
