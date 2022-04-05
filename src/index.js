import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import AnimaisView from './componentes/AnimaisView/AnimaisView';
import ClientesView from './componentes/ClientesView/ClientesView';
import ConsultasView from './componentes/ConsultasView/ConsultasView';
import EspeciesView from './componentes/EspeciesView/EspeciesView';
import Sidebar from './componentes/Sidebar/Sidebar';
import VeterinarioView from './componentes/VeterinarioVIew/VeterinarioView';
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
