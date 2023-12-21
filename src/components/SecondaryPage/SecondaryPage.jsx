import SecondaryPageStyle from "./SecondaryPage.module.css";
import ArticleBoxList from "../ArticleBoxList/ArticleBoxList";
import Header from "../Header/Header";
import FeedNotFollowed from "../FeedNotFollowed/FeedNotFollowed";


function SecondaryPage({ apikey, username, selectedFeedId, feedsNotFollowedView, setFeedsNotFollowedView, aux, setAux }) {
 

  return (
    <div className={SecondaryPageStyle.container}>
      {feedsNotFollowedView ? (
        // Render FeedNotFollowed component when feedsNotFollowedView is true
        <>
        <Header username={username} />
        <FeedNotFollowed apikey={apikey} aux={aux} setAux={setAux}/>
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
