import React from 'react';
import { Link } from 'react-router-dom';

function NavigationHeader() {
  return (
    <nav className="bg-gradient-to-r from-teal-400 to-blue-500 p-2">
      <ul className="flex justify-between items-center">
        <li>
          <Link to="/" className="text-white font-bold">Home</Link>
        </li>
        <li>
          <Link to="/blog" className="text-white font-bold">Blog</Link>
        </li>
        <li>
          <Link to="/blog-page" className="text-white font-bold">Blog Page</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationHeader;
