import FeedStyle from './Feed.module.css';
import feedicon from '../../assets/rssicon.png';
import usePosts from '../../hooks/usePosts';
import { useEffect } from 'react';
import axios from 'axios';

function Feed({name, onClick}) {


    return (
        <div className={FeedStyle.feed} onClick={onClick}>
            <img src={feedicon} alt='icon' className={FeedStyle.icon} />

            <div className={FeedStyle.title}>
                {name}
            </div>
        </div>
    )
}

export default Feed;