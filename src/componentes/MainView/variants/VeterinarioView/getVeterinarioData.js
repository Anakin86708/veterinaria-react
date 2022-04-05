const getVeterinarioData = async function () {
    const url = "http://localhost:8765/veterinarios";
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (e) {
        console.error('Error - fetch data: ' + e);
    }
}

export default getVeterinarioData;
