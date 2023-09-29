import ArticleBox from "../ArticleBox/ArticleBox"
import ArticleBoxListStyle from "./ArticleBoxList.module.css"
const mockData = [
    {
        title: 'Tentative Deal Reached to keep government open without full wall funding',
        readed: false
    },
    {
        title: 'A woman just not a woman in the world of sports',
        readed: false
    },
    {
        title: 'When social media goes too far, whats next?',
        readed: false
    },
    {
        title: 'Tentative Deal Reached to keep government open without full wall funding',
        readed: false
    },
    {
        title: 'A woman just not a woman in the world of sports',
        readed: false
    },
    {
        title: 'When social media goes too far, whats next?',
        readed: false
    }, {
        title: 'Tentative Deal Reached to keep government open without full wall funding',
        readed: false
    },
    {
        title: 'A woman just not a woman in the world of sports',
        readed: false
    },
    {
        title: 'When social media goes too far, whats next?',
        readed: false
    }
]


function ArticleBoxList() {
    return (
        <div className={ArticleBoxListStyle.list}>
            {mockData.map((data, index) => (
                <ArticleBox
                    key={index} // Use a unique key for each item when mapping
                    title={data.title}
                    readed={data.readed}
                />
            ))}
        </div>
    )
}

export default ArticleBoxList