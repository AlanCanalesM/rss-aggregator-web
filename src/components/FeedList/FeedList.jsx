import FeedListStyle from './FeedList.module.css';
import Feed from '../Feed/Feed';
import useFeeds from '../../hooks/useFeeds';

function FeedList() {

    const { feeds } = useFeeds();

    return (
        <div className={FeedListStyle.list}>
            {feeds.map((data, index) => (
                <Feed
                    key={index} // Use a unique key for each item when mapping
                    name={data.name}
                />
            ))}
        </div>
    )
}

export default FeedList;