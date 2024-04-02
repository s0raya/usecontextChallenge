import { useState } from "react"
import { useTheme } from "../themes/ThemeContext";

export default function Button() {
    const { theme, toggleTheme } = useTheme();
    const [enable, setEnable] = useState(true);

    const handleTheme = () => {
        setEnable(!enable)
        toggleTheme();
    }
    
    return (
        <button onClick={handleTheme} className={`App ${theme}`}>
            {enable ? 'Activar' : 'Desactivar'} modo oscuro
        </button>  
    )
}