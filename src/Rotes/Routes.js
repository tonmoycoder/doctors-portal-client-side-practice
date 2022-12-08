import DashboardLayout from '../Layout/DashboardLayout';
import Appointment from '../Pages/Appointments/Appointment/Appointment';
import AddDoctor from '../Pages/Dashboard/AddDoctor/AddDoctor';
import AllUsers from '../Pages/Dashboard/AllUsers/AllUsers';
import ManageDoctor from '../Pages/Dashboard/ManageDoctor/ManageDoctor';
import MyAppointment from '../Pages/Dashboard/MyAppointment/MyAppointment';
import Payment from '../Pages/Dashboard/Payment/Payment';
import DisplayError from '../Pages/Shared/Error/DisplayError';
import SignUp from '../Pages/UserRegister/SignUp/SignUp';
import AdminRoute from './AdminRoute/AdminRoute';
import PrivateRoute from './PrivateRoute';

const { createBrowserRouter } = require('react-router-dom');
const { default: Main } = require('../Layout/Main');
const { default: Home } = require('../Pages/Home/HomeMain/Home');
const { default: Login } = require('../Pages/UserRegister/Login/Login');

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
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
        element: <Appointment></Appointment>,
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: '/dashboard',
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: '/dashboard/allUsers',
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/adddoctor',
        element: (
          <AdminRoute>
            <AddDoctor></AddDoctor>
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/manageDoctors',
        element: (
          <AdminRoute>
            <ManageDoctor></ManageDoctor>
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/payment/:payid',
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`https://doctors-portal-server-beta-dun.vercel.app/bookings/${params.payid}`),
      },
    ],
  },
]);

export default router;
