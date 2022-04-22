import styles from './searchbar.module.scss';
import { ReactComponent as SearchIcon } from '../assets/icon-search.svg'
import { useContext, useState } from 'react';
import { ThemeContext } from '../App';

interface iSearchBarProps {
    setUsername: React.Dispatch<React.SetStateAction<string>>
    found: boolean
}


const SearchBar: React.FC<iSearchBarProps> = ({setUsername, found}) => {

    const {darkMode} = useContext(ThemeContext);

    const [input, setInput] = useState('');

    function handleInputChange(event: React.ChangeEvent) {
        let target = event.target as HTMLInputElement;
        setInput(target.value);
    }

    function handleSubmit(event:React.MouseEvent, content:string) {
        setUsername(content);
    }

    return (
        <div className={darkMode ? `${styles.searchbar} ${styles.searchbar__dark}` : `${styles.searchbar} ${styles.searchbar__light}`}>
                <SearchIcon className={styles.searchbar_icon} />
                <input onChange={(e) => handleInputChange(e)} placeholder='Search Github username…' className={darkMode ? `${styles.searchbar_input} ${styles.searchbar_input__dark}` : `${styles.searchbar_input} ${styles.searchbar_input__light}}`} />
                {!found && <p className={styles.searchbar_error}><strong>No results</strong></p>}
            <button onClick={(e) => handleSubmit(e, input)} className={styles.searchbar_button}>Search</button>
        </div>
        
    )
}

export default SearchBar