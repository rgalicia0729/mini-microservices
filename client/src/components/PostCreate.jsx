import React, { useState } from 'react';
import axios from 'axios';

const PostCreate = () => {
  const [title, setTitle] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios({
      method: 'POST',
      url: 'http://localhost:4000/posts',
      data: { title }
    });

    setTitle('');

  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" className="form-control mb-3" onChange={(e) => setTitle(e.target.value)} />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default PostCreate;
