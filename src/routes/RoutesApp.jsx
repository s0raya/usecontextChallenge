import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../pages/Header"
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import MyJob from "../pages/MyJob";
import Button from '../components/Button';
import { useTheme } from "../themes/ThemeContext";

export default function RoutesApp() {
    const { theme } = useTheme();
    return (
        <Router>
            <section className={`App ${theme}`}>
                <div className="content">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/myjob" element={<MyJob />} />
                    </Routes>    
                    <Button />
                </div>
            </section>
        </Router>
    )
}