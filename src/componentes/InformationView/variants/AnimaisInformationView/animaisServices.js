const insertNewAnimal = async function (idCliente, data) {
    const url = "http://localhost:8765/animais/clientes/" + idCliente;
    const filterData = Object.fromEntries(
        Object.entries(formatData(data)).filter(([k]) => k !== 'clientePertencente')
    );
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(filterData)
    }
    
    console.log('url: ' + url);
    console.log('Payload: ');
    console.log(filterData);
    console.log('Options: ');
    console.log(requestOptions);

    const response = await fetch(url, requestOptions);
    return response;
}

const formatData = function(data) {
    return {...data, "especie": {"id": data["especie"]}}
}

export {insertNewAnimal};
