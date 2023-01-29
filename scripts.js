// API address
let url = "https://api.wheretheiss.at/v1/satellites/25544";

// Asynchronous function to retrieve data form an API
async function getISS() {
    //Fetch() function
    const response = await fetch(url);
    const data =await response.json();

    //Destructuring: take info out of an array and put them into a veritable
    const { latitude, longitude } = data;

    //Display data into the HTML document  
    document.getElementById('lat').textContent = (data.latitude);
    document.getElementById('lon').textContent = (data.longitude);
}

    //Run the function
    getISS();