import styles from './card.module.scss';
import {ReactComponent as LocationIcon} from '../assets/icon-location.svg';
import {ReactComponent as TwitterIcon} from '../assets/icon-twitter.svg';
import {ReactComponent as WebsiteIcon} from '../assets/icon-website.svg';
import {ReactComponent as CompanyIcon} from '../assets/icon-company.svg';
import formatDateString from '../helpers/formatDateString';
import { useContext } from 'react';
import { ThemeContext } from '../App';

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
    user: iUser
}


const Card: React.FC<iCardProps> = ({user}) => {

    const {darkMode} = useContext(ThemeContext);

    return (
        <div className={darkMode ? `${styles.card} ${styles.card__dark}`: `${styles.card} ${styles.card__light}`}>
            <div className={styles.card_imageNameHandleJoined}>
                <img className={styles.card_image} src={user.avatar_url} alt="avatar" />
                <div className={styles.card_nameHandleJoined}>
                    <div className={darkMode ? styles.card_nameHandle__dark : styles.card_nameHandle__light}>
                        <h1><strong>{user.name ? user.name : user.login}</strong></h1>
                        <h3 className={styles.card_handle}>@{user.login}</h3>
                    </div>

                    <p className={darkMode ? styles.card_joined__dark : styles.card_joined__light}>Joined {formatDateString(user.created_at)}</p>
                </div>
            </div>

            <div className={darkMode ? `${styles.card_description} ${styles.card_description__dark}` : `${styles.card_description} ${styles.card_description__light}`}>
                {user.bio ? 
                    <p>{user.bio}</p>
                :
                    <p className={styles.card__notAvailable}>This profile has no bio.</p> 
            }
            </div>

            <div className={darkMode ? `${styles.card_stats} ${styles.card_stats__dark}` : `${styles.card_stats} ${styles.card_stats__light}` }>
                <div className={darkMode ? `${styles.card_stat} ${styles.card_stat__dark}`: `${styles.card_stat} ${styles.card_stat__light}`}>
                    <h4>Repos</h4>
                    {user.public_repos}
                </div>
                <div className={darkMode ? `${styles.card_stat} ${styles.card_stat__dark}`: `${styles.card_stat} ${styles.card_stat__light}`}>
                    <h4>Followers</h4>
                    {user.followers}
                </div>
                <div className={darkMode ? `${styles.card_stat} ${styles.card_stat__dark}`: `${styles.card_stat} ${styles.card_stat__light}`}>
                    <h4>Following</h4>
                    {user.following}
                </div>
            </div>

            <div className={darkMode ? `${styles.card_socials} ${styles.card_socials__dark}` : `${styles.card_socials} ${styles.card_socials__light}`}>
                <ul>
                    {user.location ?
                        <li>
                            <LocationIcon />
                            <p>{user.location}</p>
                        </li>
                    :
                        <li className={styles.card__notAvailable}>
                            <LocationIcon />
                            <p>Not Available</p>
                        </li>}
                    {user.blog ? 
                        <li>
                            <WebsiteIcon />
                            <p><a href={(user.blog.substring(0,8) === 'https://' || user.blog.substring(0,7) === 'http://') ? user.blog : `https://${user.blog}`} target="_blank" rel="noreferrer">{user.blog}</a></p>
                        </li>
                    :
                        <li className={styles.card__notAvailable}>
                            <WebsiteIcon />
                            <p>Not Available</p>
                        </li>
                    }
                    {user.twitter_username ?
                        <li>
                            <TwitterIcon />
                            <p><a href={`https://www.twitter.com/${user.twitter_username}`} target="_blank" rel="noreferrer" >{user.twitter_username}</a></p>
                        </li>
                    :
                        <li className={styles.card__notAvailable}>
                            <TwitterIcon />
                            <p>Not Available</p>
                        </li>
                    }
                    {user.company ?
                        <li>
                            <CompanyIcon />
                            <p>
                                {user.company[0] === '@' ? 
                                    <a href={`https://github.com/${user.company.substring(1)}`} target="_blank" rel="noreferrer">{user.company}</a>
                                :
                                user.company
                            }                                
                            </p>
                        </li>
                    :
                        <li className={styles.card__notAvailable}>
                            <CompanyIcon />
                            <p>Not Available</p>
                        </li>
                    }
                </ul>
            </div>


        </div>
    )
}

export default Card