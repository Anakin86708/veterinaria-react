const getEspeciesData = async function () {
    const url = "http://localhost:8765/especies"
    const response = await fetch(url);
    if (response.ok)
        return await response.json()
    throw "Request failied: " + response.statusText;
}

export default getEspeciesData;