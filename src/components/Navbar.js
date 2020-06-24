import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ backBtn }) => {
  return (
    <nav>
      <div className='container nav-container'>
        <h3 className='pb-2 pt-3'>Simple Job Board</h3>

        {backBtn && (
          <Link to='/'>
            <button type='button' className='btn btn-primary'>
              Back
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
