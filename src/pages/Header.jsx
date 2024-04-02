import { Link, Outlet } from 'react-router-dom';
import { useTheme } from "../themes/ThemeContext";


export default function Header() {
    const {theme} = useTheme();
    return (
        <>
            <nav className={`App ${theme}`}>
                <Link to='/'>Home</Link>
                <Link to='/profile'>Profile</Link>
                <Link to='/myjob'>My Job</Link>
            </nav>
            <Outlet />
        </>
    )
}