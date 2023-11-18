import FeedListStyle from './FeedList.module.css';
import Feed from '../Feed/Feed';
import useFeeds from '../../hooks/useFeeds';

function FeedList({ apikey, setSelectedFeedId, handleFeedClick }) {

    const {feedsFollows } = useFeeds(apikey);


 
    return (
        <>
        <div className={FeedListStyle.list}>
            {feedsFollows.map((data) => (
                <Feed
                    key={data.feed_id} 
                    name={data.feed_name}
                    onClick={() => handleFeedClick(data.feed_id)}
                />
            
            ))}
        </div>
        {/* <button>Add new feed</button> */}
        </>
    )
}

export default FeedList;