import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        fontWeight: '700',
        fontSize: '2rem',
        paddingTop: '15rem',
        letterSpacing: '1px',
      }}
    >
      <div>404 | Not Found</div>
      <Link to='/'>
        <button type='button' className='btn btn-primary'>
          Home Page
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
