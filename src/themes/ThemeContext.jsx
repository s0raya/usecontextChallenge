import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => { setTheme(theme === "light"  ? "dark" : "light")};
    // settheme(theme => (theme === 'light ? 'dark : 'light))

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);

/* const useTheme = () => {
    const context = useContext(ThemeContext);
    return context
}
export { ThemeProvider, useTheme }

*/