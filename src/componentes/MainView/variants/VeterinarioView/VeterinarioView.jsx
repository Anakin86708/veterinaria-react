import React, { useEffect, useState } from "react";
import VeterinarioInformationView from "../../../InformationView/variants/VeterinarioInformationView/VeterinarioInformationView";
import { deleteVeterinario } from "../../../InformationView/variants/VeterinarioInformationView/veterinariosService";
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

        const handleClickDelete = function (data) {
            const response = deleteVeterinario(data.id);
            response.then(r => {
                if (r.ok) {
                    fetchData();
                } else {
                    console.log("Unable to remove");
                }
            });
        }

        const fetchData = async () => {
            try {
                const data = await getVeterinarioData();
                const newItems = data.map(d => <Item title={d.nome} onClick={() => setSelectedItem(d)} onClickDelete={() => { handleClickDelete(d) }} key={d.id} />);
                setItems(newItems);
            } catch (e) {
                console.error(e);
                setItems([<ErrorListComponent reason={e.toString()} />]);
            }
        }
        fetchData();
    }, [selectedData?.id, showModal]);

    const modal = showModal ?
        <VeterinarioInformationView data={selectedData} onClose={() => setShowModal(false)} />
        : null;

    const onClickAdd = function () {
        setSelectedData({
            nome: "",
            endereco: "",
            telefone: ""
        });
        setShowModal(true);
    }

    return (
        <MainView title="Veterinário" modal={modal} onClickAdd={onClickAdd}>
            {items}
        </MainView>
    );
}

export default VeterinarioView;