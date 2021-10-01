import React from "react";
import CommentItem from "./CommentItem";

const CommentList = ({ comments }) => {
  const renderedCommentList = comments.map((comment, index) => {
    return (
      <div className='ui comments' key={index}>
        <CommentItem comment={comment.comment} author={comment.author} />
      </div>
    );
  });

  return (
    <div className='ui relaxed divided list'>
      <h3 className='ui dividing header'>Comments</h3>
      {renderedCommentList}
    </div>
  );
};

export default CommentList;
