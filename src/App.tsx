import '@assets/sass/style.scss';
import { LanguageProvider } from '@contexts/LanguageProvider';
import Login from '@ui/landingPage/organisms/Login';
import Register from '@ui/landingPage/organisms/Register';
import LandingPage from '@ui/landingPage/pages/LandingPage';
import LandingTemplate from '@ui/landingPage/templates/LandingTemplate';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';


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
        },
        {
          path: "register",
          element: <Register />,
        },

      ]
    },

  ]);

  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  )
}

export default App
