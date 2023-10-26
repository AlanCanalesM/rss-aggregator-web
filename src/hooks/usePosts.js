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

  function getAllPosts(apiKey) {
    useEffect(() => {
      axios
        .get('http://localhost:8080/v1/posts', {
          headers: {
            Authorization: `ApiKey ${apiKey}`,
          },
        })
        .then((response) => {
          setPosts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  }

  function getPostsForFeed(apiKey, feedId) {
    useEffect(() => {
      axios
        .get(`http://localhost:8080/v1/posts_feed/${feedId}`, {
          headers: {
            Authorization: `ApiKey ${apiKey}`,
          },
        })
        .then((response) => {
          setPosts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

  }
  return { posts, selectedArticle, handleArticleClick, handleCloseModal, getAllPosts, getPostsForFeed };
}

export default usePosts;
