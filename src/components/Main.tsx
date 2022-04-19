import Card from "./Card";
import SearchBar from "./SearchBar";
import styles from './main.module.scss';

export default function Main() {
    return (
        <main className={styles.main}>
            <SearchBar />
            <Card />
        </main>
    )
}