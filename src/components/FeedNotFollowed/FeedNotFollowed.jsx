// FeedNotFollowed.js
import React from "react";
import FeedNotFollowedDiv from "../FeedNotFollowedDiv/FeedNotFollowedDiv";
import styles from "./FeedNotFollowed.module.css";
import useFeeds from "../../hooks/useFeeds";
import { useEffect, useState } from "react";

function FeedNotFollowed({apikey, aux, setAux}) {

  const [feedsNotFollows, setFeedsNotFollows] = useState([]);
  

    useEffect(() => {
        const fetchFeeds = async () => {
            try {
                const response = await fetch('http://localhost:8080/v1/feeds_not_followed', {
                    headers: {
                        Authorization: `ApiKey ${apikey}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch feeds');
                }

                const data = await response.json();
                setFeedsNotFollows(data); // assuming the API response is an array of feeds
            } catch (error) {
                console.error('Error fetching feeds:', error);
            }
        };

        fetchFeeds();
    }, [aux]);

    const handleFollow = async (feedId, feedName) => {
        console.log('handlefollow', feedId);
        console.log('handlefollow', feedName);
        try {
            const response = await fetch(`http://localhost:8080/v1/feed_follows`, {
                method: 'POST',
                headers: {
                    Authorization: `ApiKey ${apikey}`,
                },
                body: JSON.stringify({
                    feed_id: feedId,
                    feed_name: feedName,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to follow feed');
            }
            setAux(aux + 1);
            // Trigger the parent's handleFeedClick function to update state or trigger actions
            //handleFeedClick(feedId);
        } catch (error) {
            console.error('Error following feed:', error);
        }
    };





  return (
    <div className={styles.container}>

      {feedsNotFollows.map((data) => (
        <FeedNotFollowedDiv
          key={data.id}
          name={data.name}
          url={data.url}
          createdAt={data.created_at}
          apikey={apikey}
          id={data.id}
          handleFollow={() => handleFollow(data.id, data.name)}
        />
      ))}
    </div>
  );
}

export default FeedNotFollowed;
