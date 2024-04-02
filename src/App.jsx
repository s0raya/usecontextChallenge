import './App.css'; // Archivo de estilos CSS
import RoutesApp from './routes/RoutesApp';
import { ThemeProvider } from './themes/ThemeContext';
import { useTheme } from "./themes/ThemeContext";

const App = () => {
  const theme = useTheme();
  return (
  <ThemeProvider>
    <section className='App'>
      <RoutesApp />
    </section>
  </ThemeProvider>
  );
};

export default App;
