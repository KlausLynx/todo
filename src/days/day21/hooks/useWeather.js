import { useState, useEffect } from 'react';

const GEOCODING_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";


export default function useWeather(location) {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError]= useState(null);

    useEffect(() => {
        if (!location) return;

        setLoading(true)

        const controller = new AbortController();

        const fetchWeatherData = async () => {
            const { latitude, longitude, name, country } = await fetchCoordinates(location); 
            const weather = await fetchWeather(latitude, longitude);
            setWeatherData({ ...weather, city: name, country });  
            setLoading(false)
        }
        
        const fetchCoordinates = async (location) => {
            try {
                const response = await fetch(`${GEOCODING_URL}?name=${location}`, { signal: controller.signal });
                if(!response.ok) {
                    throw new Error('Failed to fetch coordinates');
                }
                const data = await response.json();
                console.log('Geocoding data:', data);
                if (data.results && data.results.length > 0) {
                    const { latitude, longitude, name, country } = data.results[0];
                    return { latitude, longitude, name, country };
                }
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setError(error.message);
                }
            }
        }

const fetchWeather = async (latitude, longitude) => {
    try {
        // 🍽️ Fetch 1 — current weather (temp, wind, weathercode etc)
        const weatherResponse = await fetch(
            `${WEATHER_URL}?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
            { signal: controller.signal }
        );

        // 🍽️ Fetch 2 — humidity only
        const humidityResponse = await fetch(
            `${WEATHER_URL}?latitude=${latitude}&longitude=${longitude}&current=relative_humidity_2m`,
            { signal: controller.signal }
        );

        if (!weatherResponse.ok || !humidityResponse.ok) {
            throw new Error('Failed to fetch weather data');
        }

        const weatherData  = await weatherResponse.json();
        const humidityData = await humidityResponse.json();

        // ✅ Combine both into one object
        const result = {
            temperature:   weatherData.current_weather?.temperature,
            windspeed:     weatherData.current_weather?.windspeed,
            winddirection: weatherData.current_weather?.winddirection,
            isDay:         weatherData.current_weather?.is_day,
            weathercode:   weatherData.current_weather?.weathercode,
            humidity:      humidityData.current?.relative_humidity_2m,  // 👈 from second fetch
        };

        console.log('FINAL RESULT:', result);

        return result;

    } catch (error) {
        if (error.name !== 'AbortError') {
            setError(error.message);
        }
    }
};
        fetchWeatherData();

        return () => {
            controller.abort();
        }
    }, [location]);

    return { weatherData, loading, setLoading, error };
}