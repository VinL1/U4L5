let data = 'https://api.wheretheiss.at/v1/satellites/25544';

async function getData(){
    const reponse = await fetch(data);
    const fetched = await reponse.json();
    data = fetched;
    
    getLoc();
}

async function getLoc()
{

    const {latitude, longitude} = data;
    console.log(longitude);
    console.log(latitude);


    document.getElementById('lat').textContent = latitude;
    document.getElementById('lon').textContent = longitude;

}

getData();
getLoc();