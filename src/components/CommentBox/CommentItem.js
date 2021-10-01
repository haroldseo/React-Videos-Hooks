import React from "react";

const CommentItem = ({ comment, author }) => {
  return (
    <div className='comment'>
      <div className='content'>
        <div className='author'>{author}</div>
        <div className='metadata'>
          <div className='date'>2 days ago</div>
        </div>
        <div className='text'>{comment}</div>
      </div>
    </div>
  );
};

export default CommentItem;
