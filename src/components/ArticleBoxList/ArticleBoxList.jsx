import ArticleBox from "../ArticleBox/ArticleBox"
import ArticleBoxListStyle from "./ArticleBoxList.module.css"
import { useState } from "react"
import axios from 'axios'


const mockData = [
    {
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "feed_id": 1
    },
    {
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "feed_id": 2
    },
    {
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "feed_id": 1
    },
    {
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "feed_id": 2
    },
    {
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "feed_id": 1
    },
    {
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "feed_id": 2
    },
    {
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "feed_id": 1
    },
    {
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "feed_id": 2
    }
]

function ArticleBoxList() {

    // const [posts, setPosts] = useState([]);

    // axios.get('http://localhost:8080/v1/allPosts')
    // .then(response => {
    //     setPosts(response.data)
    // })
    // .catch(error => {
    //     console.log(error)
    // }
    // )

    
    return (
        <div className={ArticleBoxListStyle.list}>
            {mockData.map((data, index) => (
                <ArticleBox
                    key={index} // Use a unique key for each item when mapping
                    title={data.title}
                    readed={data.feed_id}
                />
            ))}
        </div>
    )
}

export default ArticleBoxList