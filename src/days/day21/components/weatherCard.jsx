import { getWeatherCodeDescription } from "../helper/weatherCode";
import useTheme from "../hooks/useTheme";

export function WeatherCard({ weather }) {
    const { label, emoji } = getWeatherCodeDescription(weather.weathercode);
    const { theme } = useTheme()

    return (
        <div style={{
            background: theme === 'light' ? "linear-gradient(135deg, whitesmoke 0%, orange 100%)" : 'linear-gradient(135deg, #353531, #0a0a08)',
            borderBottomRightRadius: "16px",
            borderBottomLeftRadius: "16px",
            padding: "32px",
            color: "white",
            textAlign: "center",
        }}>
            <p style={{ margin: 0, fontSize: "18px", opacity: 0.9 }}>
                {weather.city}, {weather.country}
            </p>
            <p style={{ fontSize: "72px", margin: "16px 0" }}>{emoji}</p>
            <p style={{ fontSize: "64px", fontWeight: "bold", margin: 0 }}>
                {Math.round(weather.temperature)}°C
            </p>
            <p style={{ fontSize: "20px", margin: "8px 0" }}>{label}</p>

            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "32px",
                marginTop: "24px",
                padding: "16px",
                background: "rgba(255,255,255,0.15)",
                borderRadius: "12px",
            }}>
                <div>
                    <p style={{ margin: 0, opacity: 0.8, fontSize: "13px" }}>💨 Wind</p>
                    <p style={{ margin: 0, fontWeight: "bold" }}>{weather.windspeed} km/h</p>
                </div>
                <div>
                    <p style={{ margin: 0, opacity: 0.8, fontSize: "13px" }}>💧 Humidity</p>
                    <p style={{ margin: 0, fontWeight: "bold" }}>{weather.humidity}%</p>
                </div>
            </div>
        </div>
    );
}