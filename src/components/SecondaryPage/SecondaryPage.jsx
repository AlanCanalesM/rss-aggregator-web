import SecondaryPageStyle from "./SecondaryPage.module.css";
import ArticleBoxList from "../ArticleBoxList/ArticleBoxList";
import Header from "../Header/Header";
import { useLocation } from "react-router-dom";


function SecondaryPage({apikey, username, selectedFeedId}) {
  
  return (
    <div className={SecondaryPageStyle.container}>
      <Header username={username}/>
      <ArticleBoxList apikey={apikey} selectedFeedId={selectedFeedId}/>
    </div>
  );
}

export default SecondaryPage;