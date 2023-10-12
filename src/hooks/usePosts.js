import { useState, useEffect } from 'react';
import axios from 'axios';

function usePosts() {
  const [posts, setPosts] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:8080/v1/allPosts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleArticleClick({ title, description }) {
    setSelectedArticle({ title, description });
  }

  function handleCloseModal() {
    setSelectedArticle(null);
  }

  return { posts, selectedArticle, handleArticleClick, handleCloseModal };
}

export default usePosts;
