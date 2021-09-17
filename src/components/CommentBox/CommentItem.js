import React from "react";

const CommentItem = ({ comment }) => {
  return (
    <div className='item'>
      <div className='content'>
        <div className='description'>{comment}</div>
      </div>
    </div>
  );
};

export default CommentItem;
