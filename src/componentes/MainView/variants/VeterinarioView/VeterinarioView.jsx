import React, { useEffect, useState } from "react";
import VeterinarioInformationView from "../../../InformationView/variants/VeterinarioInformationView/VeterinarioInformationView";
import Item from "../../../Item/Item";
import ErrorListComponent from "../../../MessageListComponent/variants/ErrorListComponent/ErrorListComponent";
import MainView from "../../MainView";
import getVeterinarioData from "./getVeterinarioData";

const VeterinarioView = function (props) {
    const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedData, setSelectedData] = useState(null);

    useEffect(() => {
        const setSelectedItem = function (data) {
            setSelectedData(data);

            if (data.id === selectedData?.id) {
                setShowModal(!showModal);
            } else {
                setShowModal(true);
            }
        }

        const fetchData = async () => {
            try {
                const data = await getVeterinarioData();
                const newItems = data.map(d => <Item title={d.nome} onClick={() => setSelectedItem(d)} key={d.id} />);
                setItems(newItems);
            } catch (e) {
                console.error(e);
                setItems([<ErrorListComponent reason={e.toString()} />]);
            }
        }
        fetchData();
    }, [selectedData?.id, showModal]);

    const modal = showModal ?
        <VeterinarioInformationView data={selectedData} onClose={() => setShowModal(false)}/>
        : null;

    return (
        <MainView title="Veterinário" modal={modal}>
            {items}
        </MainView>
    );
}

export default VeterinarioView;