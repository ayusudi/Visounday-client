import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import HomePage from './pages/HomePage.jsx'
import PlaySongPage from './pages/PlaySongPage.jsx'
import TopChartPage from './pages/TopChartPage.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "top",
        element: <TopChartPage />
      },
      {
        path: "play",
        element: <PlaySongPage />,
      }]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
