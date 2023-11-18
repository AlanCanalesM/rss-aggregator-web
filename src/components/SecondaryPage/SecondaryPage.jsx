import SecondaryPageStyle from "./SecondaryPage.module.css";
import ArticleBoxList from "../ArticleBoxList/ArticleBoxList";
import Header from "../Header/Header";
import FeedNotFollowed from "../FeedNotFollowed/FeedNotFollowed";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function SecondaryPage({ apikey, username, selectedFeedId, feedsNotFollowedView, setFeedsNotFollowedView }) {
 

  return (
    <div className={SecondaryPageStyle.container}>
      {feedsNotFollowedView ? (
        // Render FeedNotFollowed component when feedsNotFollowedView is true
        <>
        <Header username={username} />
        <FeedNotFollowed apikey={apikey}/>
        </>
      ) : (
        // Render the other part of your code when feedsNotFollowedView is false
        <>
          <Header username={username} />
          <ArticleBoxList apikey={apikey} selectedFeedId={selectedFeedId} />
        </>
      )}
    </div>
  );
}

export default SecondaryPage;
