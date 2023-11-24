// FeedNotFollowed.js
import React from "react";
import FeedNotFollowedDiv from "../FeedNotFollowedDiv/FeedNotFollowedDiv";
import styles from "./FeedNotFollowed.module.css";
import useFeeds from "../../hooks/useFeeds";
import { useEffect, useState } from "react";

function FeedNotFollowed(apikey) {

  const { feedsNotFollows } = useFeeds(apikey['apikey']);





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
        />
      ))}
    </div>
  );
}

export default FeedNotFollowed;
