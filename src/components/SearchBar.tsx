import styles from './searchbar.module.scss';
import { ReactComponent as SearchIcon } from '../assets/icon-search.svg'
import { useState } from 'react';

interface iSearchBarProps {
    setUsername: React.Dispatch<React.SetStateAction<string>>
    found: boolean
}


const SearchBar: React.FC<iSearchBarProps> = ({setUsername, found}) => {

    const [input, setInput] = useState('');

    function handleInputChange(event: React.ChangeEvent) {
        let target = event.target as HTMLInputElement;
        setInput(target.value);
    }

    function handleSubmit(event:React.MouseEvent, content:string) {
        setUsername(content);
    }

    return (
        <div className={styles.searchbar}>
                <SearchIcon className={styles.searchbar_icon} />
                <input onChange={(e) => handleInputChange(e)} placeholder='Search Github username…' className={styles.searchbar_input} />
                {!found && <p className={styles.searchbar_error}><strong>No results</strong></p>}
            <button onClick={(e) => handleSubmit(e, input)} className={styles.searchbar_button}>Search</button>
        </div>
        
    )
}

export default SearchBar