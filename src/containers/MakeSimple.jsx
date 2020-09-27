import React from 'react';

import BlogCard from './BlogCard';

const MakeSimple = () => {
  const content = `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Consequatur placeat quidem excepturi cum incidunt omnis quasi, aut,
    odio nulla repellendus aperiam sit deleniti ipsam eligendi quisquam reiciendis ?
    Veniam eligendi neque eos nisi dolore eum, laudantium facere accusamus, ab dolores accusantium.`;

  return (
    <main className='main'>
      <h3>Make It Simple</h3>
      <div className='main__blog'>
        <BlogCard content={content} url={url} title={title} />
      </div>
    </main>
  );
};

export default MakeSimple;
