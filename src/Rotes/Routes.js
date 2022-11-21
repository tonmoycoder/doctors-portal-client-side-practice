import Appointment from '../Pages/Appointments/Appointment/Appointment';
import Dashboard from '../Pages/Dashboard/Dashboard/Dashboard';
import SignUp from '../Pages/UserRegister/SignUp/SignUp';
import PrivateRoute from './PrivateRoute'

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
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
      {
        path: '/appointment',
        element: <Appointment></Appointment>
      },
    ],
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
  }
]);

export default router;