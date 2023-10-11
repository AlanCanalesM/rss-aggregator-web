import React from 'react';
import ArticleBox from '../ArticleBox/ArticleBox';
import ArticleBoxListStyle from './ArticleBoxList.module.css';
import ArticleContentModal from '../ArticleContentModal/ArticleContentModal';
import { useState, useEffect } from 'react';




import axios from 'axios';

function ArticleBoxList() {
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
    setSelectedArticle({ title, description }); // Set selected article
  }

  const handleCloseModal = () => {
    setSelectedArticle(null); // Close the modal
  };



  return (
    <div className={ArticleBoxListStyle['list-container']}>
      <div className={ArticleBoxListStyle.list}>
        {posts.map((data, index) => (
          <ArticleBox
            key={index}
            title={data.title}
            readed={data.feed_id}
            handleArticleClick={handleArticleClick}
            description={data.description}
          />
        ))}
      </div>
      {selectedArticle && (


        <ArticleContentModal
          title={selectedArticle.title}
          description={selectedArticle.description}
          onClose={handleCloseModal}
          selectedArticle={selectedArticle}



        />


      )}
    </div>
  );
}
export default ArticleBoxList;
