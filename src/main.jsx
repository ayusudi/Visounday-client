import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import HomePage from './pages/HomePage.jsx'
import ChatPage from './pages/ChatPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import IndexerPage from './pages/IndexerPage.jsx'
import TermAndConditionPage from './pages/TnCPage.jsx'
import UseCasePage from './pages/UseCasePage.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom'

function checkAuth() {
  const token = localStorage.getItem('access_token');
  if (!token) {
    return redirect("/")
  }
  return null;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
        loader: () => {
          if (localStorage.getItem("access_token")) {
            return redirect("/dashboard")
          }
          return null
        }
      },
      {
        path: "use-case",
        element: <UseCasePage />
      },
      {
        path: "terms-and-conditions",
        element: <TermAndConditionPage />
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
        loader: checkAuth
      },
      {
        path: "enhancer/:cloudinary_id",
        element: <IndexerPage />,
        loader: checkAuth
      },
      {
        path: "chat/:cloudinary_id",
        element: <ChatPage />,
        loader: checkAuth
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);