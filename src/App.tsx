import React, { useState, createContext } from 'react';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import styles from './App.module.scss';

interface DarkModeContextValue {
    darkMode?: boolean,
    setDarkMode?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeContext = createContext<DarkModeContextValue>({});

function App() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const [darkMode, setDarkMode] = useState(prefersDark);
    

  return (
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
    <div className={darkMode ? `${styles.app} ${styles.appDark}` : `${styles.app} ${styles.appLight}`}>
        <Header/>
        <Main />
    </div>
    </ThemeContext.Provider>
    
  );
}

export default App;
