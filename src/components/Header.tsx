import styles from './header.module.scss';
import {ReactComponent as LightIcon} from '../assets/icon-sun.svg';
import {ReactComponent as DarkIcon} from '../assets/icon-moon.svg';
import { ThemeContext } from '../App';
import React, { useContext } from 'react';

export default function Header() {

    const {darkMode, setDarkMode} = useContext(ThemeContext)

    function handleClick(event: React.MouseEvent) {
        event.preventDefault();
        if (setDarkMode) {
            console.log('clicked!');
            setDarkMode(prevState => !prevState);
        }
    }

    return (
        <header className={styles.header}>
            <h1 className={darkMode ? `${styles.header_title} ${styles.header_title__dark}` : `${styles.header_title} ${styles.header_title__light}`}>devfinder</h1>
            <button onClick={(e) => handleClick(e)} className={darkMode ? `${styles.header_button} ${styles.header_button__dark}` : `${styles.header_button} ${styles.header_button__light}`}>
                <h4 className={styles.header_buttonCopy}>{darkMode ? 'LIGHT' : 'DARK'}</h4>
                { darkMode ? <LightIcon /> : <DarkIcon /> }        
            </button>
        </header>
    )
}