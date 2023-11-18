// FeedNotFollowed.js
import React from "react";
import FeedNotFollowedDiv from "../FeedNotFollowedDiv/FeedNotFollowedDiv";
import styles from "./FeedNotFollowed.module.css";
import useFeeds from "../../hooks/useFeeds";

function FeedNotFollowed(apikey) {

   const {feedsNotFollows, getFeedsNotFollows} = useFeeds();

   getFeedsNotFollows();


  return (
    <div className={styles.container}>
      
      {feedsNotFollows.map((data) => (
        <FeedNotFollowedDiv
          key={data.id}
          name={data.name}
          url={data.url}
          createdAt={data.created_at}
        />
      ))}
    </div>
  );
}

export default FeedNotFollowed;
