import React, { useState } from "react";

const CommentBox = ({ setComments }) => {
  const [commentValue, setCommentValue] = useState("");

  const onCommentInputChange = (event) => {
    setCommentValue(event.target.value);
  };

  const onCommentSubmit = (event) => {
    event.preventDefault();

    setComments((comments) => [...comments, commentValue]);
    setCommentValue("");
  };

  return (
    <form onSubmit={onCommentSubmit} className='ui form'>
      <div className='field'>
        <div className='ui action input'>
          <input type='text' placeholder='Add Comment' value={commentValue} onChange={onCommentInputChange} />
          <button className='ui button' type='submit'>
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentBox;
