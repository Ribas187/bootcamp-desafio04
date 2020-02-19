import React from 'react';

import './style.css';
import Comment from '../Comment';

function Post({data}) {
  return(
    <div id="post">
      <div id="author">
        <img src={data.author.avatar} />
        <div id="info">
          <span id="name" >{data.author.name}</span>
          <span id="date" >{data.date}</span>
        </div>
      </div>
      <p>{data.content}</p>
      <hr />
      {data.comments.map(comment => <Comment key={comment.id} data={comment} />)}
    </div>
  );
}

export default Post;