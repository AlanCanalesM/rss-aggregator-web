import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HomePage from './routes/HomePage/HomePage.jsx'
import LoginPage from './routes/LoginPage/LoginPage.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('roots')).render(
  <React.StrictMode>
      <div className='maindiv'>
      {/* <SideBar />
      <SecondaryPage /> */}
      <RouterProvider router={router} />
      </div>
  </React.StrictMode>,
)
