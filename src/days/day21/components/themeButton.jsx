import  useTheme  from '../hooks/useTheme'

export const ThemeButton = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <button 
            onClick={toggleTheme}
            style={{ 
                background: "none",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
            }}
            title="Toggle theme"
        >
            {theme === "light" ? "🌙" : "☀️"}
        </button>
    )
}
