import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import Navbar from '../../Navbar/Navbar';
import './Post.css';

const Post = ({ location, history }) => {
  const [post, setPost] = useState('');

  useEffect(() => {
    if (!location.state) {
      history.push('/');
    } else {
      setPost(location.state.post);
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div>
      <Navbar backBtn={true} />
      {post && (
        <div className='container post-container page-top mb-5'>
          <div className='post-head'>
            <img src={post.company_logo} alt='company_logo' className='post-img' />
            <div>
              <div className='post-head-title'>
                {post.title} ({post.type})
              </div>
              <div className='post-head-sub-title'>
                {post.company} - {post.location} (
                {new Date(post.created_at).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
                )
              </div>
            </div>
          </div>
          <div className='post-btns-container'>
            <a
              href={post.url}
              rel='noopener noreferrer'
              target='_blank'
              className='post-btns-outline'
            >
              Apply To Job
            </a>
            <a
              href={post.company_url}
              rel='noopener noreferrer'
              target='_blank'
              className='post-btns-solid'
            >
              Company Website
            </a>
          </div>
          <div className='post-dec'>{parse(post.description)}</div>
        </div>
      )}
    </div>
  );
};

export default Post;
