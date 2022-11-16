const { createBrowserRouter } = require('react-router-dom');
const { default: Main } = require('../Layout/Main');
const { default: Home } = require('../Pages/Home/HomeMain/Home');
const { default: Login } = require('../Pages/UserRegister/Login/Login');

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;