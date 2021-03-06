import React from 'react';
import { Link } from 'react-router-dom';

const NoResults = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        fontWeight: '700',
        fontSize: '2rem',
        paddingTop: '10rem',
        letterSpacing: '1px',
      }}
    >
      <div>No Results Found</div>
      <p className='dec-404'>Please Try Again</p>
    </div>
  );
};

export default NoResults;
