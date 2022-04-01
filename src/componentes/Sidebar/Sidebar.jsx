import React, { StrictMode, useState } from "react";
import './Sidebar.css';

const Sidebar =  function (props) {
    const title = props.title;
    const mapServices = props.mapServices;
    const servicesNames = [...mapServices.keys()];
    const serviceItems = servicesNames.map((name, index) =>
        <ServiceItem name={name} onClick={() => props.onClickOnService(name)} />
    );

    return (
        <React.StrictMode>
            <div className="sidebar">
                <h1>{title}</h1>
                <ServiceList>
                    {serviceItems.slice()}
                </ServiceList>
            </div>
        </React.StrictMode>
    );
}

function ServiceList(props) {
    return (
        <div className="service-list">
            {props.children}
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

export default Sidebar;