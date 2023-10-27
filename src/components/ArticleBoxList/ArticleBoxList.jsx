import React, { useState, useEffect } from 'react';
import ArticleBox from '../ArticleBox/ArticleBox';
import ArticleBoxListStyle from './ArticleBoxList.module.css';
import ArticleContentModal from '../ArticleContentModal/ArticleContentModal';
import usePosts from '../../hooks/usePosts';

function ArticleBoxList({ apikey, selectedFeedId}) {


  const { posts, selectedArticle, handleArticleClick, handleCloseModal, getPostsForFeed } = usePosts();
 
      getPostsForFeed(selectedFeedId, apikey);
   

  return (
    <div className={ArticleBoxListStyle['list-container']}>
      <div className={ArticleBoxListStyle.list}>
        {posts.map((post, index) => (
          <ArticleBox
            key={index}
            title={post.title}
            readed={post.feed_id}
            handleArticleClick={() => handleArticleClick(post)}
            description={post.description}
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
