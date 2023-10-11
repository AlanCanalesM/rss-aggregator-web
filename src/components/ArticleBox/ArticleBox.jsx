import React from 'react';
import ReadedPoint from '../ReadedPoint/ReadedPoint';
import ArticleBoxStyle from './ArticleBox.module.css';

function ArticleBox({ title, readed, handleArticleClick, description }) {
  const handleClick = () => {
    // Pass title and description to the handleArticleClick function
    handleArticleClick({ title, description }); // Replace 'your_description_here' with the actual description
  };

  return (
    <div className={ArticleBoxStyle.container} onClick={handleClick}>
      <ReadedPoint readed={readed} />
      <h3 className={ArticleBoxStyle.title}>{title}</h3>
      <p className={ArticleBoxStyle.hour}>2h ago</p>
    </div>
  );
}

export default ArticleBox;
