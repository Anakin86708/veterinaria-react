const insertNewCliente = async function (data) {
    const url = "http://localhost:8765/clientes/";
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

const deleteCliente = async function (id) {
    const url = 'http://localhost:8765/clientes/'+ id;
    const requestOptions = {
        method: "DELETE"
    }
    const response = await fetch(url, requestOptions);
    return response;
}

export {insertNewCliente, deleteCliente};
