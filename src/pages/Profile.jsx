import { useTheme } from "../themes/ThemeContext";

export default function Profile() {
    const {theme} = useTheme();
    return (
        <>
            <h1 className={`App ${theme}`}>Esta es la pagina profile</h1>
        </>
    )
};