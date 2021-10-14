import React, { useState } from "react";

import "./CommentBox.css";

const CommentBox = ({ addComment }) => {
  const [commentValue, setCommentValue] = useState({ author: "", comment: "" });
  const author = commentValue.author;
  const comment = commentValue.comment;

  const [commentErr, setCommentErr] = useState({});

  const handleUserInput = (event) => {
    setCommentValue({ ...commentValue, [event.target.name]: event.target.value });
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();

    const isValid = formValidation();

    if (isValid) {
      addComment(commentValue);
      setCommentValue({ ...commentValue, author: "", comment: "" });
    }
  };

  const formValidation = () => {
    const commentErr = {};
    let isValid = true;

    if (!author) {
      commentErr.author = "Name is required!";
      isValid = false;
    }

    if (!comment) {
      commentErr.comment = "Comment is required!";
      isValid = false;
    } else if (comment.length > 300) {
      commentErr.comment = "You have exceeded the maximum character limit: 300";
      isValid = false;
    }

    setCommentErr(commentErr);
    return isValid;
  };

  return (
    <form onSubmit={handleCommentSubmit} className='ui form'>
      <div className='field'>
        <input type='text' placeholder='Name' value={author} name='author' onChange={handleUserInput} className={`${commentErr.author ? "inputError" : ""}`} />
        <div className='error'>{commentErr.author}</div>
      </div>
      <div className='field'>
        <textarea rows='3' type='text' placeholder='Add Comment' value={comment} name='comment' onChange={handleUserInput} className={`${commentErr.comment ? "inputError" : ""}`} />
        <div className='error'>{commentErr.comment}</div>
      </div>
      <button className='ui button' type='submit'>
        Post
      </button>
    </form>
  );
};

export default CommentBox;
