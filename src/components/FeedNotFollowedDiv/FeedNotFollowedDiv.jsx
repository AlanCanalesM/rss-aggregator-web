// FeedNotFollowedDiv.js
import React from "react";
import styles from "./FeedNotFollowedDiv.module.css";

function FeedNotFollowedDiv({name, url, createdAt}) {
  return (
    <div className={styles.feedItem}>
      <h1 className={styles.h1}>{name}</h1>
      <p>{url}</p>
      <p>{createdAt}</p>
      <button className={styles.followButton}>Follow</button>
    </div>
  );
}

export default FeedNotFollowedDiv;
