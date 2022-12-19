const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c602c2a816msh297bf45b9e7ee43p10af73jsn65242bcb5cd5',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
getWheather = (city)=>{
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        sunrise.innerHTML = new Date(response.sunrise).toLocaleTimeString('en-US') 
        sunset.innerHTML = new Date(response.sunset).toLocaleTimeString('en-US')
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
    })
    .catch(err => console.error(err));
}


submitButton.addEventListener('click',(e)=>{
    e.preventDefault();
    getWheather(city.value);
})

function getTableData(city){
     return fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
};

var table = document.getElementById('table');
function generateTable(table, data) {
    console.log(data.length);
    data.forEach(element => {
        
      let row = table.insertRow();
      for (key in element) {
        //console.log(key)
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    });
  }
var tableData = []
getTableData('raipur').then(response => response.json())
.then(response =>{
    response = {city:'raipur',...response};
    tableData.push(response)
    //console.log(tableData[0]);
})
getTableData('Mumbai').then(response => response.json())
.then(response =>{
    response = {city:'Mumbai',...response};
    tableData.push(response)
    //console.log(tableData[1]);
})
getTableData('Chennai').then(response => response.json())
.then(response =>{
    response = {city:'Chennai',...response};
    tableData.push(response)
   // console.log(tableData[2]);
})
getTableData('Kolkata').then(response => response.json())
.then(response =>{
    response = {city:'Kolkata',...response};
    tableData.push(response)
    console.log(tableData);
    generateTable(table,tableData);
})


getWheather('Delhi');

//console.log(table)
