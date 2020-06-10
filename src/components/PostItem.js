import React from 'react';

import PostComments from './PostComments';

function PostItem({ author, date, content, comments }) {
  return (
    <div className="post">
      <PostHeader author={author} date={date}/>
      <p className="post-content">{content}</p>
      <PostComments comments={comments}/>
    </div>
  )
};

function PostHeader({ author, date }) {
  return (
    <div className="post-header">
      <img src={author.avatar} className="avatar"/>
      <div className="details">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
  </div>
  );
};

export default PostItem;
