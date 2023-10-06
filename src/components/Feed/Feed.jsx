import FeedStyle from './Feed.module.css';
import feedicon from '../../assets/rssicon.png';

function Feed({name}) {
    return (
        <div className={FeedStyle.feed}>
            <img src={feedicon} alt='icon' className={FeedStyle.icon} />

            <div className={FeedStyle.title}>
                {name}
            </div>
        </div>
    )
}

export default Feed;