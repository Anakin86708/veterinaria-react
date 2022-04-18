const insertNewAnimal = async function (idCliente, data) {
    const url = "http://localhost:8765/animais/clientes/" + idCliente;
    const filterData = Object.fromEntries(
        Object.entries(formatDate(data)).filter(([k]) => k !== 'clientePertencente')
    );
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    const response = await fetch(url, requestOptions);
    return response;
}

const formatDate = function(data) {
    return {...data, "especie": {"id": data["especie"]}}
}

export {insertNewAnimal};
