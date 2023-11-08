import { useContext } from 'react';
import {ThemeContext} from "../Routes/N3";

export const Header = () => {
    const theme = useContext(ThemeContext);
  
    return (
      <header style={{ background: theme === 'light' ? '#f0f0f0' : '#333' }}>
        <h1>Mi Aplicación Temática</h1>
      </header>
    );
  }
  
 export const Content = () => {
    const theme = useContext(ThemeContext);
  
    return (
      <div style={{ color: theme === 'light' ? '#333' : '#f0f0f0' }}>
        <p>Bienvenido a mi aplicación temática. Este es el contenido.</p>
      </div>
    );
  }