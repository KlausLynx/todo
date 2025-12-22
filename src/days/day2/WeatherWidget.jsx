import React from 'react';
import './Exercises.css';


function WeatherWidget() {

    const weather = {
        city: "London",
        tempC: 18,
        condition: "Rainy"
    };

    const getWeatherEmoji = (condition) => {
        switch (condition.toLowerCase()) {
            case 'sunny':
                return '☀️';
            case 'cloudy':
                return '☁️';
            case 'rainy':
                return '🌧️';
            case 'snowy':
                return '❄️';
            default:
                return '🌈';
        }
    };

    const convertCtoF = (celsius) =>  {
        return (celsius * 9/5) + 32;
    }

    return (
        <div className="weather-widget card" style={{backgroundColor: 'lightblue'}}>
            <h2 className="card-title">Weather in {weather.city}</h2>
            <div className="card-body">
                <p className="temp">{weather.tempC}°C </p> <br/>
                <p className="temp">{convertCtoF(weather.tempC).toFixed(1)}°F</p>
                <p className="condition">{weather.condition} {getWeatherEmoji(weather.condition)}</p>
            </div>
        </div>
    );
}

export default WeatherWidget;
