import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import AnimaisView from './componentes/MainView/variants/AnimaisView/AnimaisView';
import ClientesView from './componentes/MainView/variants/ClientesView/ClientesView';
import ConsultasView from './componentes/MainView/variants/ConsultasView/ConsultasView';
import EspeciesView from './componentes/MainView/variants/EspeciesView/EspeciesView';
import VeterinarioView from './componentes/MainView/variants/VeterinarioView/VeterinarioView';
import Sidebar from './componentes/Sidebar/Sidebar';
import './index.css';

const App = function () {
    const [selectedView, setSelectedView] = useState(null);
    const serviceName2View = new Map([
        ['Clientes', <ClientesView />],
        ['Animais', <AnimaisView />],
        ['Espécies', <EspeciesView />],
        ['Consultas', <ConsultasView />],
        ['Veterinários', <VeterinarioView />]
    ]);

    const handleClickOnService = function (serviceName) {
        const view = serviceName2View.get(serviceName);
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
