import '@assets/sass/style.scss';
import Login from '@ui/landingPage/organisms/Login';
import Register from '@ui/landingPage/organisms/Register';
import LandingTemplate from '@ui/landingPage/templates/LandingTemplate';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import LandingPage from '@ui/landingPage/pages/LandingPage';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingTemplate />,
      children: [
        {
          path: "",
          element: <LandingPage />,
          index: true
        },
        {
          path: "login",
          element: <Login />,
          index: true
        },
        {
          path: "register",
          element: <Register />,
          index: true
        },

      ]
    },


  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
