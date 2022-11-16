import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/icons/logo.png';

const Header = () => {
  const header = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/">Appointment</Link>
      </li>
      <li>
        <Link to="/">Reviews</Link>
      </li>
      <li>
        <Link to="/">Contact Us</Link>
      </li>
      <li>
        <Link to="/">Login</Link>
      </li>
    </>
  );
  return (
    <div className="bg-stone-800 text-white">
      <div className="navbar  max-w-7xl mx-auto py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow hover:bg-orange-900 bg-stone-800 text-white rounded-box w-52">
              {header}
            </ul>
          </div>
          <Link to="/" className="h-auto normal-case ">
            <img className="h-16" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{header}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
