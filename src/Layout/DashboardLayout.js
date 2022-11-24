import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Header from '../Pages/Shared/Header/Header';
import useAdmin from './../Hooks/useAdmin';

const DashboardLayout = () => {
  const {user} = useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email)
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile max-w-7xl mx-auto">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* Page content here */}
          <Outlet></Outlet>
          
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/*  Sidebar content here*/}
            <li>
              <Link to='/dashboard'>My Appointments</Link>
            </li>
            {
              isAdmin && <li>
              <Link to='/dashboard/allUsers'>Users</Link>
            </li>
            
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
