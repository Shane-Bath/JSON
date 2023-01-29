
// Initialize the map- leaflet mapping
const map = L.map('map').setView([0, 0,], 1
    );

//Add map tile - openstreetmap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

 // Create a unique marker
 const issMarker = L.icon({
    iconUrl: 'iss.png',
    iconSize: [50, 32],
    iconAnchor: [25, 16],
});

//Place a marker on the map
const marker = L.marker([0, 0],{icon: issMarker}).addTo(map);

// API address - Data used to mark the map
let url = "https://api.wheretheiss.at/v1/satellites/25544";

// Asynchronous function to retrieve data form an API
async function getISS() {
    //Fetch() function
    const response = await fetch(url);
    const data =await response.json();

    //Destructuring: take info out of an array and put them into a veritable
    const { latitude, longitude } = data;
    
    //Use data to position marker on the map
    marker.setLatLng([latitude, longitude]);
    map.setView([latitude, longitude], 3);

    //Display data into the HTML document  
    document.getElementById('lat').textContent = (data.latitude);
    document.getElementById('lon').textContent = (data.longitude);
}

    //Run the function
    getISS();

    //Update the location of the marker- refresh information 

    setInterval(getISS, 4000);