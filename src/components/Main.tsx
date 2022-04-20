import Card from "./Card";
import SearchBar from "./SearchBar";
import styles from './main.module.scss';
import { useState, useEffect } from "react";

interface iUser {
    name?: string,
    login?:string,
    public_repos?:number,
    followers?:number,
    following?:number,
    blog?:string,
    location?:string,
    company?:string,
    twitter_username?:string,
    avatar_url?:string,
    created_at:string,
    bio?:string
}


export default function Main() {

    const [username, setUsername]= useState('octocat');
    const [data, setData] = useState<iUser>({created_at:""});

    async function fetchUser(user:string) {
        const response = await fetch(`https://api.github.com/users/${user}`);
        const result = await response.json();
        return await result;
    }

    useEffect(() => { 
        fetchUser(username).then(function(result) {
            setData(result)
        })
    },[username])


    return (
        <main className={styles.main}>
            <SearchBar setUsername={setUsername} />
            <Card user={data} />
        </main>
    )
}