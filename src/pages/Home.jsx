import { useTheme } from "../themes/ThemeContext";

export default function Home() {
    const {theme} = useTheme();
    return (
        <>
            <h1 className={`App ${theme}`}>Esta es la página home</h1>
        </>
    )
};