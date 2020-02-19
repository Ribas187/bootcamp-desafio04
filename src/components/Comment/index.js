import React from 'react';

import './style.css';

function Comment({data}) {
  return(
    <div id="comment">
      <img src={data.author.avatar} />
      <div id="content">
        <p><strong>{data.author.name} </strong>{data.content}</p>
      </div>
    </div>
  );
}

export default Comment;