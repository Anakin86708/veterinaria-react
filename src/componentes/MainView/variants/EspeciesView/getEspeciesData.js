const getEspeciesData = async function () {
    const url = process.env.REACT_APP_URL_ESPECIE;
    const response = await fetch(url);
    if (response.ok)
        return await response.json()
    throw "Request failied: " + response.statusText;
}

export default getEspeciesData;