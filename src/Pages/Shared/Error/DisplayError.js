import React, { useContext } from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import './DisplayError.css';

const DisplayError = () => {
  const error = useRouteError();
  const { logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen bg_under ">
      <p className="text-red-600 text-xl">Something went wrong</p>
      <p className="text-red-600 font-bold text-xl my-4">
        {' '}
        <i>{error.statusText || error.message}</i>
      </p>
      <h4 className="text-4xl text-sky-200">
        If you are facing problem Please{' '}
        <button className="link link-primary" onClick={handleLogOut}>
          SignOut
        </button>{' '}
        and then{' '}
        <Link className="link link-primary" to="/login">
          Login
        </Link>{' '}
        again
      </h4>
    </div>
  );
};

export default DisplayError;
