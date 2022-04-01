import React, { StrictMode, useState } from "react";
import './Sidebar.css';

export function Sidebar(props) {
    const title = props.title;
    const servicesNames = [
        "Clientes",
        "Animais",
        "Espécies",
        "Consultas",
        "Veterinários"
    ]
    const serviceItems = servicesNames.map((name, index) =>
        <ServiceItem name={name} onClick={() => props.onClickOnService(name)} />
    );

    return (
        <React.StrictMode>
            <div className="sidebar">
                <h1>{title}</h1>
                <ServiceList serviceItems={serviceItems} />
            </div>
        </React.StrictMode>
    );
}

function ServiceList(props) {
    const serviceItems = props.serviceItems.slice();

    return (
        <div className="service-list">
            {serviceItems}
        </div>
    );
}

function ServiceItem(props) {
    const name = props.name;

    return (
        <button
            className="btn btn-outline-primary service-item"
            onClick={props.onClick}
        >
            {name}
        </button>
    );
}
