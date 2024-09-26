import './App.css'
// import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";


import App from './App.jsx'
import SignIn from "./pages/signin";
import SignUp from './pages/signup/index.jsx';
import OverView from './pages/overview/index.jsx';
import Journey from './pages/journey/index.jsx';
import Main from './pages/Main.jsx';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />
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
        path: "my/journey",
        element: <Journey />
      },
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
