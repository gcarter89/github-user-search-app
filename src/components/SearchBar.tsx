import styles from './searchbar.module.scss';
import { ReactComponent as SearchIcon } from '../assets/icon-search.svg'
export default function SearchBar() {
    return (
        <div className={styles.searchbar}>
            <div className={styles.searchbar_iconInput}>
                <SearchIcon className={styles.searchbar_icon} />
                <input placeholder='Search Github username…' className={styles.searchbar_input} />
            </div>
            <button className={styles.searchbar_button}>Search</button>
        </div>
        
    )
}