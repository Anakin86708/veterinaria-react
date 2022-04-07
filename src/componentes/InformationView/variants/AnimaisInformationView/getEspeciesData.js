const getEspeciesData = async function () {
    const url = "http://localhost:8765/especies"
    try{
        const response = await fetch(url);
        return await response.json()
        
    } catch (e) {
        console.error(e);
    }
}

export default getEspeciesData;