import {ThemeContext} from "./Routes/N3";


export const ThemeProvider = ({ children }) => {
    const theme = 'light'; // Puedes definir el tema inicial aquí
  
    return (
      <ThemeContext.Provider value={theme}>
        {children}
      </ThemeContext.Provider>
    );
  }