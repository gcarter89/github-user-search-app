import styles from './card.module.scss';
import {ReactComponent as LocationIcon} from '../assets/icon-location.svg';
import {ReactComponent as TwitterIcon} from '../assets/icon-twitter.svg';
import {ReactComponent as WebsiteIcon} from '../assets/icon-website.svg';
import {ReactComponent as CompanyIcon} from '../assets/icon-company.svg';
import { useEffect, useState } from 'react';
import formatDateString from '../helpers/formatDateString';

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

interface iCardProps {
    username : string
}


const Card: React.FC<iCardProps> = ({username}) => {
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
    
    console.log(data);

    return (
        <div className={styles.card}>
            <div className={styles.card_imageHandleJoined}>
                <img className={styles.card_image} src={data.avatar_url} alt="avatar" />
                <div>
                    <h3><strong>{data.name}</strong></h3>
                    <h4 className={styles.card_handle}>@{data.login}</h4>
                    <h4 className={styles.card_joined}>Joined {formatDateString(data.created_at)}</h4>
                </div>
            </div>

            <div className={styles.card_description}>
                <p>{data.bio ? data.bio : 'This profile has no bio'}</p>
            </div>

            <div className={styles.card_stats}>
                <div className={styles.card_stat}>
                    <h4>Repos</h4>
                    {data.public_repos}
                </div>
                <div className={styles.card_stat}>
                    <h4>Followers</h4>
                    {data.followers}
                </div>
                <div className={styles.card_stat}>
                    <h4>Following</h4>
                    {data.following}
                </div>
            </div>

            <div className={styles.card_socials}>
                <ul>
                    <li>
                        <LocationIcon />
                        <p>{data.location ? data.location : 'Not Available'}</p>
                    </li>
                    <li>
                        <WebsiteIcon />
                        <p>{data.blog ? data.blog : 'Not Available'}</p>
                    </li>
                    <li>
                        <TwitterIcon />
                        <p>{data.twitter_username ? data.twitter_username : 'Not Available'}</p>
                    </li>
                    <li>
                        <CompanyIcon />
                        <p>{data.company ? data.company : 'Not Available'}</p>
                    </li>
                </ul>
            </div>


        </div>
    )
}

export default Card