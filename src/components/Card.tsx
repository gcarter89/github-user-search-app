import styles from './card.module.scss';
import {ReactComponent as LocationIcon} from '../assets/icon-location.svg';
import {ReactComponent as TwitterIcon} from '../assets/icon-twitter.svg';
import {ReactComponent as WebsiteIcon} from '../assets/icon-website.svg';
import {ReactComponent as CompanyIcon} from '../assets/icon-company.svg';
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
    user: iUser
}


const Card: React.FC<iCardProps> = ({user}) => {
    console.log(user);

    return (
        <div className={styles.card}>
            <div className={styles.card_imageNameHandleJoined}>
                <img className={styles.card_image} src={user.avatar_url} alt="avatar" />
                <div className={styles.card_nameHandleJoined}>
                    <div className={styles.card_nameHandle}>
                        <h1><strong>{user.name ? user.name : user.login}</strong></h1>
                        <h3 className={styles.card_handle}>@{user.login}</h3>
                    </div>

                    <p className={styles.card_joined}>Joined {formatDateString(user.created_at)}</p>
                </div>
            </div>

            <div className={styles.card_description}>
                {user.bio ? 
                    <p>{user.bio}</p>
                :
                    <p className={styles.card__notAvailable}>This profile has no bio.</p> 
            }
            </div>

            <div className={styles.card_stats}>
                <div className={styles.card_stat}>
                    <h4>Repos</h4>
                    {user.public_repos}
                </div>
                <div className={styles.card_stat}>
                    <h4>Followers</h4>
                    {user.followers}
                </div>
                <div className={styles.card_stat}>
                    <h4>Following</h4>
                    {user.following}
                </div>
            </div>

            <div className={styles.card_socials}>
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