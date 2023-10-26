import FeedListStyle from './FeedList.module.css';
import Feed from '../Feed/Feed';
import useFeeds from '../../hooks/useFeeds';

function FeedList({ apikey }) {

    const { getFeedsFollows, feedsFollows } = useFeeds();

    getFeedsFollows(apikey);
    return (
        <>
        <div className={FeedListStyle.list}>
            {feedsFollows.map((data) => (
                <Feed
                    key={data.id} // Use a unique key for each item when mapping
                    name={data.feed_name}
                    id={data.id}
                />
            ))}
        </div>
        <button>Add new feed</button>
        </>
    )
}

export default FeedList;