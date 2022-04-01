import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Sidebar } from './componentes/Sidebar/Sidebar';
import './index.css';

const App = function () {
    const [selectedView, setSelectedView] = useState(null);
    const serviceName2View = new Map();

    const handleClickOnService = function (serviceName) {
        console.log("Received: " + serviceName);
        const view = serviceName2View.get(serviceName);
        console.log(view);
        setSelectedView(view);
    }

    return (
        <div className='app'>
            <Sidebar title="Veterinária" onClickOnService={(name) => handleClickOnService(name)}/>
        </div>
    );
}

// Initial point
const root = ReactDOM.createRoot(
    document.getElementById('root')
);
root.render(<App />)
