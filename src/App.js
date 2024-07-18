import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import ProjectRoutes from './ProjectRoutes';  // Importation de ton fichier avec les routes
import './App.css';  // Pour les styles

function App() {
    return (
        <Router>
            <div className="app-container">
                {/* Barre de navigation */}
                <div className="navigation-buttons">
                    <button className="nav-btn">
                        <Link to="/page1">Page 1</Link>
                    </button>

                    <button className="nav-btn">
                        <Link to="/page22">Page 2</Link>
                    </button>

                </div>

                {/* Rendu des routes */}
                <ProjectRoutes />
            </div>
        </Router>
    );
}

export default App;
