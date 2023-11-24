// FeedNotFollowedDiv.js
import React from "react";
import styles from "./FeedNotFollowedDiv.module.css";
import useFeeds from "../../hooks/useFeeds";

function FeedNotFollowedDiv({name, url, createdAt, apikey, id}) {

  const {followFeed} = useFeeds(apikey['apikey']);
  
  // function handleFollowClick() {
  //   console.log("follow clicked")
  // }

  return (
    <div className={styles.feedItem}>
      <h1 className={styles.h1}>{name}</h1>
      <p>{url}</p>
      <p>{createdAt}</p>
      <button className={styles.followButton} onClick={() => followFeed(id, name)}>Follow</button>
    </div>
  );
}

export default FeedNotFollowedDiv;
