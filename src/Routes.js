import React from 'react';
import { useRoutes } from 'react-router-dom';


import Dashboard from './pages/page1/Dashboard';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import Dashboard2 from "./pages/page2/Dashboard2";
import Dashboard222 from "./pages/page22/Dashboard222";


const ProjectRoutes = () => {
    let element = useRoutes([
        { path: "/page1", element: <Dashboard /> },
        { path: "/page2", element: <Dashboard2 /> },
        { path: "/page22", element: <Dashboard222 /> },
        { path: "/page3", element: <Page3 /> },
        { path: "/page4", element: <Page4 /> },
    ]);

    return element;
};

export default ProjectRoutes;
