// Feed.js
import React from "react";
import FeedStyle from "./Feed.module.css";
import feedicon from "../../assets/rssicon.png";
import useFeeds from "../../hooks/useFeeds";

function Feed({ name, onClick, apikey, feedId, handleUnfollow }) {


    return (
        <div className={FeedStyle.feed} onClick={onClick}>
            <img src={feedicon} alt="icon" className={FeedStyle.icon} />

            <div className={FeedStyle.title}>
                {name}
                
            </div>
            <button className={FeedStyle.unfollowButton} onClick={handleUnfollow}>
                    Unfollow
                </button>
        </div>
    );
}

export default Feed;
