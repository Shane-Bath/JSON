let url = "https://api.wheretheiss.at/v1/satellites/25544";

async function getISS() {
    const response = await fetch(url);
    const data =await response.json();
    const { latitude, longitude } = data;
    document.getElementById('lat').textContent = (data.latitude);
    document.getElementById('lon').textContent = (data.longitude);
}
    getISS();