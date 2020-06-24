import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import parse from 'html-react-parser';
import Navbar from '../../Navbar';
import './Home.css';

const Home = () => {
  const [values, setValues] = useState({
    lang: '',
    city: '',
    select: '',
    errors: false,
    data: '',
  });

  const { lang, city, select, errors, data } = values;

  useEffect(() => {
    axios
      .get('https://jobs.github.com/positions.json')
      .then((response) => {
        setValues({ ...values, data: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Grab the value first then the event
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  // Form Submit
  const handleSubmit = () => {
    if (lang === '' || city === '' || select === '') {
      setValues({ ...values, errors: true });

      return setTimeout(() => {
        setValues({ ...values, errors: false });
      }, 2000);
    }
  };

  const jobSearchForm = () => (
    <form className='job-search-container p-4'>
      <div className='form-row'>
        <div className='col-4'>
          <input
            type='text'
            className='form-control'
            placeholder='Programing Language'
            onChange={handleChange('lang')}
          />
        </div>
        <div className='col-3'>
          <input
            type='text'
            className='form-control'
            placeholder='City Name'
            onChange={handleChange('city')}
          />
        </div>
        <div className='col-3'>
          <select className='form-control' onChange={handleChange('select')}>
            <option value='' disabled selected hidden>
              Job Type
            </option>
            <option value='part'>Part Time</option>
            <option value='full'>Full Time</option>
          </select>
        </div>
        <div className='col'>
          <button
            onClick={handleSubmit}
            style={{ width: '100%' }}
            type='button'
            className='btn btn-primary'
            disabled={errors && true}
          >
            <svg
              className='bi bi-search'
              width='1em'
              height='1em'
              viewBox='0 0 16 16'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z'
              />
              <path
                fillRule='evenodd'
                d='M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z'
              />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );

  const postingCard = () => (
    <div>
      {data ? (
        data.map((post, index) => (
          <div className='posting-container ' key={index}>
            <div className='posting-head'>
              <div className='posting-head-left'>
                <img
                  className='posting-company-logo'
                  src={post.company_logo}
                  alt='company_logo'
                />
                <div className='posting-company-name-title'>
                  {' '}
                  {post.title} | {post.company}
                </div>
              </div>

              <div className='posting-head-right'>
                <div className='posting-company-name'>
                  <svg
                    className='bi bi-briefcase-fill'
                    width='1em'
                    height='1em'
                    viewBox='0 0 16 16'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z'
                    />
                    <path
                      fillRule='evenodd'
                      d='M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v1.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 5.884V4.5zm5-2A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z'
                    />
                  </svg>

                  <span className='posting-blue'>{post.type}</span>
                </div>
                <div className='posting-company-name'>
                  <svg
                    className='bi bi-calendar3-fill'
                    width='1em'
                    height='1em'
                    viewBox='0 0 16 16'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2H0z' />
                    <path
                      fillRule='evenodd'
                      d='M0 3h16v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm6.5 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-8 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-8 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0z'
                    />
                  </svg>
                  <span className='posting-blue'>
                    {' '}
                    {new Date(post.created_at).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <div className='posting-company-name'>
                  <svg
                    className='bi bi-building'
                    width='1em'
                    height='1em'
                    viewBox='0 0 16 16'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M15.285.089A.5.5 0 0 1 15.5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .418-.493l5.582-.93V3.5a.5.5 0 0 1 .324-.468l8-3a.5.5 0 0 1 .46.057zM7.5 3.846V8.5a.5.5 0 0 1-.418.493l-5.582.93V15h8v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.222l-7 2.624z'
                    />
                    <path fillRule='evenodd' d='M6.5 15.5v-7h1v7h-1z' />
                    <path d='M2.5 11h1v1h-1v-1zm2 0h1v1h-1v-1zm-2 2h1v1h-1v-1zm2 0h1v1h-1v-1zm6-10h1v1h-1V3zm2 0h1v1h-1V3zm-4 2h1v1h-1V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm-2 2h1v1h-1V7zm2 0h1v1h-1V7zm-4 0h1v1h-1V7zm0 2h1v1h-1V9zm2 0h1v1h-1V9zm2 0h1v1h-1V9zm-4 2h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1z' />
                  </svg>
                  <span className='posting-blue'>{post.location}</span>
                </div>
              </div>
            </div>

            <div className='posting-bottom'>
              <div className='posting-bottom-dec'>
                {parse(post.description.replace(/(<([^>]+)>)/gi, '').substr(0, 500))} [ .
                . . ]
              </div>

              <div className='posting-bottom-btn mt-3'>
                <Link
                  to={{
                    pathname: '/job-post',
                    state: {
                      post: post,
                    },
                  }}
                >
                  <button type='button' className='btn btn-primary'>
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className='spinner-home-container '>
          <div className='spinner-border text-primary spinner-home' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div>
      <Navbar backBtn={false} />

      <div className='container mt-5'>
        {errors && (
          <div className='alert alert-danger' role='alert'>
            Please Fill out all feilds!
          </div>
        )}
        {jobSearchForm()}
        {postingCard()}
      </div>
    </div>
  );
};

export default Home;
