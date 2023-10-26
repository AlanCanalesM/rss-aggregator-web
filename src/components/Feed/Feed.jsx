import FeedStyle from './Feed.module.css';
import feedicon from '../../assets/rssicon.png';

function Feed({name, id}) {

    function handleClick() {
        console.log('Feed clicked ' + id);
    }

    return (
        <div className={FeedStyle.feed} onClick={handleClick}>
            <img src={feedicon} alt='icon' className={FeedStyle.icon} />

            <div className={FeedStyle.title}>
                {name}
            </div>
        </div>
    )
}

export default Feed;