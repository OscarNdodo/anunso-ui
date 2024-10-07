import './App.css'
// import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";


import Landing from './pages/landing/index.jsx';
import SignIn from "./pages/signin";
import SignUp from './pages/signup/index.jsx';
import OverView from './pages/overview/index.jsx';
import Journey from './pages/journey/index.jsx';
import Main from './pages/Main.jsx';
import Target from './pages/target/index.jsx';
import Docs from './pages/docs/index.jsx';
import NotFound from './pages/404/index.jsx';
import Profile from './pages/profile/index.jsx';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <NotFound /> 
  },
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "overview",
        element: <OverView />
      },
      {
        path: "journey",
        element: <Journey />
      },
      {
        path: "target",
        element: <Target />
      },
      {
        path: "docs",
        element: <Docs />
      },
      {
        path: "profile",
        element: <Profile />
      }
    ]
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/login",
    element: <SignIn />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={routes} />
  </StrictMode>,
)
