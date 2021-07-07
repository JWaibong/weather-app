async function getWeather(city){
    try{
        let request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}
        &APPID=0d688a8923717e5837591543c3ea1657&units=imperial`,{mode: 'cors'});
        request = await request.json();
        if(request.cod != 200){
            throw new Error(`${request.cod}: ${request.message}`);
        }
        return await processWeatherJSON(request);
    }
    catch(err){
        console.error(`ERROR ${err.message}`);
    }
}

async function processWeatherJSON(json){
    return {
        coord: json.coord,
        weather: json.weather,
        main: json.main,
        name: json.name,
        wind: json.wind,
        clouds: json.clouds,
        sunrise: json.sys.sunrise,
        sunset: json.sys.sunset,
    }
}

async function displayWeather(data){
    const city = document.querySelector("#city");
    const cond = document.querySelector("#condition");
    const temp = document.querySelector("#temperature");
    const hilo = document.querySelector("#highlow");


    city.textContent = data.name;
    cond.textContent = data.weather[0].main;
    temp.textContent = data.main.temp + "\u00B0";
    hilo.textContent = `High: ${data.main.temp_max}\u00B0 Low: ${data.main.temp_min}\u00B0 Feels Like: ${data.main.feels_like}\u00B0`
}

const searchCity = document.createElement("input");
searchCity.setAttribute("type", "search");
searchCity.setAttribute("id", "search");
searchCity.setAttribute("placeholder", "Search City");
searchCity.addEventListener("keyup", async (e) => {
    if(e.key === "Enter"){
        const weather = await getWeather(searchCity.value);
        displayWeather(weather);
    }

})

document.querySelector("h1").appendChild(searchCity);
