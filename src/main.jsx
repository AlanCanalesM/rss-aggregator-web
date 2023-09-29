import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ArticleBoxList from './components/ArticleBoxList/ArticleBoxList'
import SideBar from './components/SideBar/SideBar'
import SecondaryPage from './components/SecondaryPage/SecondaryPage'

ReactDOM.createRoot(document.getElementById('roots')).render(
  <React.StrictMode>
      <div className='maindiv'>
      <SideBar />
      <SecondaryPage />
      </div>
  </React.StrictMode>,
)
