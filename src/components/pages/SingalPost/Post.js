import React, { useEffect } from 'react';
import parse from 'html-react-parser';
import Navbar from '../../Navbar';

const Post = ({ location }) => {
  useEffect(() => {
    console.log(location.state.post);
  }, []);

  const { post } = location.state;

  return (
    <div>
      <Navbar backBtn={true} />
      <div className='container mt-5'>
        <div className='post-head'>
          <img src={post.company_logo} alt='company_logo' className='post-img' />
          <div>
            <div className='post-head-title'>
              {post.title} ({post.type})
            </div>
            <div className='post-head-sub-title'>
              {post.company} - {post.location}
            </div>
          </div>
        </div>
        <div className='post-dec'>{parse(post.description)}</div>
      </div>
    </div>
  );
};

export default Post;
