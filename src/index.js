import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import MainView from './componentes/MainView/MainView';
import Sidebar  from './componentes/Sidebar/Sidebar';
import './index.css';

const App = function () {
    const [selectedView, setSelectedView] = useState(null);
    const serviceName2View = new Map([
        ['Clientes', <MainView title="Clientes"/>],
        ['Animais', null],
        ['Espécies', null],
        ['Consultas', null],
        ['Veterinários', null]
    ]);

    const handleClickOnService = function (serviceName) {
        console.log("Received: " + serviceName);
        const view = serviceName2View.get(serviceName);
        console.log(view);
        setSelectedView(view);
    }

    return (
        <div className='app'>
            <Sidebar
                title="Veterinária"
                onClickOnService={(name) => handleClickOnService(name)}
                mapServices={serviceName2View}
            />
            {selectedView}
        </div>
    );
}

// Initial point
const root = ReactDOM.createRoot(
    document.getElementById('root')
);
root.render(<App />)
