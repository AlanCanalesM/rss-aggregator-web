import { useState, useEffect } from 'react';
import axios from 'axios';

function usePosts() {
  const [posts, setPosts] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  function handleArticleClick({ title, description }) {
    setSelectedArticle({ title, description });
  }

  function handleCloseModal() {
    setSelectedArticle(null);
  }

  function getPostsForFeed(feedId, apiKey) {
    useEffect(() => {
      axios
        .get(`http://localhost:8080/v1/posts_feed/${feedId}`, {
          headers: {
            Authorization: `ApiKey ${apiKey}`,
          },
        })
        .then((response) => {
          setPosts(response.data);
          console.log(feedId)
          console.log(apiKey)
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [feedId, apiKey]); // Add feedId and apiKey as dependencies
  }

  return { posts, selectedArticle, handleArticleClick, handleCloseModal, setPosts, getPostsForFeed };
}

export default usePosts;
