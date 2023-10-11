import React from 'react';
import ArticleContentModalStyle from './ArticleContentModal.module.css';
import { motion, AnimatePresence } from 'framer-motion';

function ArticleContentModal({ title, description, onClose, selectedArticle }) {
  return (
    <AnimatePresence>
      <motion.div
        className={ArticleContentModalStyle.modal} // Make sure the class name matches your CSS module
        initial={{
          opacity: 0,
          scale: 0.75,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            ease: 'easeOut',
            duration: 0.15,
          },
        }}
        exit={{
          opacity: 0,
          scale: 0.75,
          transition: {
            ease: 'easeIn',
            duration: 0.15,
          },
        }}
      >
        <div className={ArticleContentModalStyle.description}> {/* Make sure the class name matches your CSS module */}
          <span className={ArticleContentModalStyle.close} onClick={onClose}>
            &times;
          </span>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ArticleContentModal;
