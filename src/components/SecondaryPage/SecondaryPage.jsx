import SecondaryPageStyle from "./SecondaryPage.module.css";
import ArticleBoxList from "../ArticleBoxList/ArticleBoxList";
import Header from "../Header/Header";

function SecondaryPage() {
  return (
    <div className={SecondaryPageStyle.container}>
      <Header />
      <ArticleBoxList />
    </div>
  );
}

export default SecondaryPage;