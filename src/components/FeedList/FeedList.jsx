import FeedListStyle from './FeedList.module.css';
import Feed from '../Feed/Feed';
import { useState, useEffect } from 'react';
import axios from 'axios'

function FeedList (){

    const [feeds, setFeeds] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/v1/feeds')
    .then(response => {
        setFeeds(response.data)
        console.log(response.data)
        
    })
    .catch(error => {
        console.log(error)
    }
    )
    }, [])

    return (
        <div className={FeedListStyle.list}>
            {feeds.map((data, index) => (
                <Feed
                    key={index} // Use a unique key for each item when mapping
                    name={data.name}
                />
            ))}
        </div>
    )
}

export default FeedList;