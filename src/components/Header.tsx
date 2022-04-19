import styles from './header.module.scss';
// import {ReactComponent as LightIcon} from '../assets/icon-sun.svg';
import {ReactComponent as DarkIcon} from '../assets/icon-moon.svg';

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.header_title}>devfinder</h1>
            <button className={styles.header_button}>
                <h4 className={styles.header_buttonCopy}>DARK</h4>
                <DarkIcon />
                {/* <LightIcon /> */}
            </button>
        </header>
    )
}