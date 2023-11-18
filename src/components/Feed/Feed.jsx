// Feed.js
import React from "react";
import FeedStyle from "./Feed.module.css";
import feedicon from "../../assets/rssicon.png";

function Feed({ name, onClick, onUnfollowClick }) {

    const handleUnfollowClick = (e) => {
        // Stop the event propagation to prevent the click on the button from triggering the whole item's click event
        e.stopPropagation();

        
    };

    return (
        <div className={FeedStyle.feed} onClick={onClick}>
            <img src={feedicon} alt="icon" className={FeedStyle.icon} />

            <div className={FeedStyle.title}>
                {name}
                <button className={FeedStyle.unfollowButton} onClick={handleUnfollowClick}>
                    Unfollow
                </button>
            </div>
        </div>
    );
}

export default Feed;
