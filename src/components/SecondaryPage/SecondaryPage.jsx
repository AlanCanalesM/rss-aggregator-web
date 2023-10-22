import SecondaryPageStyle from "./SecondaryPage.module.css";
import ArticleBoxList from "../ArticleBoxList/ArticleBoxList";
import Header from "../Header/Header";
import { useLocation } from "react-router-dom";


function SecondaryPage() {
  const location = useLocation();
  const user = location.state.user;
  
  return (
    <div className={SecondaryPageStyle.container}>
      <Header username={user["username"]}/>
      <ArticleBoxList />
    </div>
  );
}

export default SecondaryPage;