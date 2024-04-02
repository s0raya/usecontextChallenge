import { useTheme } from "../themes/ThemeContext";

export default function MyJob() {
    const {theme} = useTheme();
    return (
        <>
            <h1 className={`App ${theme}`}>Esta es la pagina MyJob</h1>
        </>
    )
};