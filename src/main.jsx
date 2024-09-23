import './App.css'
// import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";


import App from './App.jsx'
import SignIn from "./pages/signin";
import SignUp from './pages/signup/index.jsx';
import Home from './pages/home/index.jsx';

const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />
    },
    {
      path: "/overview",
      element: <Home />
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
