import React, { useState } from "react";

const CommentBox = ({ comments, setComments, addComment }) => {
  const [commentValue, setCommentValue] = useState({ author: "", comment: "" });
  const author = commentValue.author;
  const comment = commentValue.comment;

  const handleUserInput = (event) => {
    setCommentValue({ ...commentValue, [event.target.name]: event.target.value });
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();

    addComment(commentValue);
    setCommentValue({ ...commentValue, author: "", comment: "" });
  };

  return (
    <form onSubmit={handleCommentSubmit} className='ui form'>
      <div className='field'>
        <div className='ui action input'>
          <input type='text' placeholder='Name' value={author} name='author' onChange={handleUserInput} />
          <input type='text' placeholder='Add Comment' value={comment} name='comment' onChange={handleUserInput} />
          <button className='ui button' type='submit'>
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentBox;
