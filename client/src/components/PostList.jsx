import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPost = async () => {
    const { data } = await axios({
      method: 'GET',
      url: 'http://localhost:4000/posts'
    });

    setPosts(data);
  }

  useEffect(() => {
    fetchPost();
  }, []);

  const renderedPost = Object.values(posts).map((post) => {
    return (
      <div
        className="card"
        styl={{ width: '30%', marginBottom: '20px' }}
        key={post.id}>
        <div className="card-body">
          <h3>{post.title}</h3>
        </div>
      </div>
    )
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPost}
    </div>
  );
};

export default PostList;
