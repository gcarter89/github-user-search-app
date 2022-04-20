import Card from "./Card";
import SearchBar from "./SearchBar";
import styles from './main.module.scss';
import { useState } from "react";



export default function Main() {

    const [username, setUsername]= useState('octocat')

    return (
        <main className={styles.main}>
            <SearchBar setUsername={setUsername} />
            <Card username={username} />
        </main>
    )
}