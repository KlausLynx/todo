import { useEffect, useState } from "react";
import useWeather from "./hooks/useWeather";
import { SearchBar } from "./components/searchBar"
import { ThemeButton} from "./components/themeButton.jsx"
import { WeatherCard } from "./components/weatherCard.jsx";
import ThemeProvider from "./Theme/ThemeContext.jsx"
import useTheme from "./hooks/useTheme.js";

export const WeatherComponent = () => {
    const [city, setCity] = useState('')
    const { weatherData, loading, error } = useWeather(city);
    const { theme } = useTheme()



    useEffect(()=> {
        console.log('This IS thE Weather Data',weatherData)
    }, [weatherData])

    return (
        <div style={{
            backgroundColor: theme === 'light' ? '#FF9505' : '#353531'
        }}>
            <div 
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: '1rem'
                }}>
                <h2> Weather Condition Search</h2>
                <ThemeButton/>

                <div style={{ marginBottom: "24px" }}>
                    <SearchBar onSearch={setCity} />
                </div>
            </div>

            { loading && <p style={{
                textAlign: 'center'
            }}>Loading......</p> }
            { error && <p>{error}</p>}

            {weatherData && !loading && <WeatherCard weather={weatherData}/>}
            {!city && !loading && !weatherData && (
                <div style={{ textAlign: "center", padding: "40px", opacity: 0.6 }}>
                    Search for a city to see the weather
                </div>
        )}
        </div>
    )
}

export default function Weather() {
    return (
        <ThemeProvider>
            <WeatherComponent />
        </ThemeProvider>
    )
}