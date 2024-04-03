import { Link, Outlet } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/profile'>Profile</Link>
                <Link to='/myjob'>My Job</Link>
            </nav>
            <Outlet />
        </>
    )
}