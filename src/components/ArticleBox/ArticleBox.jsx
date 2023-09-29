import ReadedPoint from "../ReadedPoint/ReadedPoint"
import ArticleBoxStyle from "./ArticleBox.module.css"

function ArticleBox({ title, readed }) {
    return (
        <div className={ArticleBoxStyle.container}>
            <ReadedPoint readed={readed} />
            <h3 className={ArticleBoxStyle.title}>{title}</h3>
            <p className={ArticleBoxStyle.hour}>2h ago</p>
        </div>
    )
}

export default ArticleBox