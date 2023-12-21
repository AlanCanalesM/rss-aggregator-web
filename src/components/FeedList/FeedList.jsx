import React, { useEffect, useState } from 'react';
import FeedListStyle from './FeedList.module.css';
import Feed from '../Feed/Feed';

function FeedList({ apikey, setSelectedFeedId, handleFeedClick, aux, setAux }) {
    const [feedsFollows, setFeedsFollows] = useState([]);
   

    useEffect(() => {
        const fetchFeeds = async () => {
            try {
                const response = await fetch('http://localhost:8080/v1/feed_follows', {
                    headers: {
                        Authorization: `ApiKey ${apikey}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch feeds');
                }

                const data = await response.json();
                setFeedsFollows(data); // assuming the API response is an array of feeds
            } catch (error) {
                console.error('Error fetching feeds:', error);
            }
        };

        fetchFeeds();
    }, [aux]);

    const handleUnfollow = async (feedId) => {
        console.log('handleUnfollow', feedId);
        try {
            const response = await fetch(`http://localhost:8080/v1/feed_follows/${feedId}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `ApiKey ${apikey}`,
                },
            });

            if (!response.ok) {
                throw new Error('Failed to unfollow feed');
            }
            setAux(aux + 1);
            // Trigger the parent's handleFeedClick function to update state or trigger actions
            handleFeedClick(feedId);
        } catch (error) {
            console.error('Error unfollowing feed:', error);
        }
    };

    return (
        <div className={FeedListStyle.list}>
            {feedsFollows.map((data) => (
                <Feed
                    key={data.feed_id}
                    name={data.feed_name}
                    onClick={() => handleFeedClick(data.feed_id)}
                    apikey={apikey}
                    feedId={data.feed_id}
                    handleUnfollow={() => handleUnfollow(data.feed_id)}
                />
            ))}
        </div>
    );
}

export default FeedList;
