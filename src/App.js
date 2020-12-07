import React, { useEffect, useState } from 'react';
import sun from './static/sun.png';


const api = {
    key: "5682a655764a212e9c109f8f160bceda",
    base: "http://api.openweathermap.org/data/2.5/"
}


function App() {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

//function to get data from api
    const search = evt => {
        if (evt.key  === "Enter"){
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
                setQuery('');
                console.log(result);
                });
        }
    }
//datebuilder to bring current date
    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday",
            "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }

    const weatherIcon = (d) => {
        //get name from api
        let iconName = weather.weather[0].icon;
        console.log (iconName);

        return `${iconName}.png`
    }



  return (
    <div className={
        (typeof weather.main != "undefined") ? ((weather.main.temp > 17) ? 'app warm' : 'app')
        : 'app'}>
        <main>
            <div className="search-box">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search for location (e.g Athens,GR)"
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                    onKeyPress={search}
                />
            </div>
            {(typeof weather.main != "undefined") ? (
            <div>
                <div className="location-box">
                    <div className="location"> {weather.name}, {weather.sys.country} </div>
                    <div className="date">{dateBuilder(new Date())}</div>
                </div>
                <div className="weather-box">

                    <div className="temperature">{Math.round(weather.main.temp)}°C </div>
                    <div className="realfeel">
                        <div>Feels like {Math.round(weather.main.feels_like)}°C</div>
                        <div>Min {Math.round(weather.main.temp_min)}°C</div>
                        <div>Max {Math.round(weather.main.temp_max)}°C</div>
                    </div>
                    <div className="weather">{weather.weather[0].description}</div>
                    <div className="weather-icon"><img src={`assets/${weatherIcon()}`} alt="weather icon"/> </div>


                </div>
            </div>
        ) : ('')}
        </main>

    </div>
  );
}

export default App;
