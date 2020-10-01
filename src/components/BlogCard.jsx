import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ title, content, url }) => {
  return (
    <div className='blog__card'>
      <h4>{title}</h4>
      <p>{content}</p>
      <Link to={url}>...Continuar</Link>
    </div>
  );
};

export default BlogCard;
