import DashboardLayout from '../Layout/DashboardLayout';
import Appointment from '../Pages/Appointments/Appointment/Appointment';
import AllUsers from '../Pages/Dashboard/AllUsers/AllUsers';
import Dashboard from '../Pages/Dashboard/Dashboard/Dashboard';
import MyAppointment from '../Pages/Dashboard/MyAppointment/MyAppointment';
import SignUp from '../Pages/UserRegister/SignUp/SignUp';
import AdminRoute from './AdminRoute/AdminRoute';
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
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: '/dashboard',
        element: <MyAppointment></MyAppointment>
      },
      {
        path: '/dashboard/allUsers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
    ]
  }
]);

export default router;