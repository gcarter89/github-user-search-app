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

    return (
        <div className={styles.card}>
            <div className={styles.card_imageHandleJoined}>
                <img className={styles.card_image} src={user.avatar_url} alt="avatar" />
                <div>
                    <h3><strong>{user.name}</strong></h3>
                    <h4 className={styles.card_handle}>@{user.login}</h4>
                    <h4 className={styles.card_joined}>Joined {formatDateString(user.created_at)}</h4>
                </div>
            </div>

            <div className={styles.card_description}>
                <p>{user.bio ? user.bio : 'This profile has no bio'}</p>
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
                    <li>
                        <LocationIcon />
                        <p>{user.location ? user.location : 'Not Available'}</p>
                    </li>
                    <li>
                        <WebsiteIcon />
                        <p>{user.blog ? user.blog : 'Not Available'}</p>
                    </li>
                    <li>
                        <TwitterIcon />
                        <p>{user.twitter_username ? user.twitter_username : 'Not Available'}</p>
                    </li>
                    <li>
                        <CompanyIcon />
                        <p>{user.company ? user.company : 'Not Available'}</p>
                    </li>
                </ul>
            </div>


        </div>
    )
}

export default Card