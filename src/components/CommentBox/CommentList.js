import React from "react";
import CommentItem from "./CommentItem";

const CommentList = ({ comments, commentKey }) => {
  const renderedCommentList = comments.map((comment, index) => {
    return <CommentItem key={index} comment={comment} />;
  });

  return <div className='ui relaxed divided list'>{renderedCommentList}</div>;
};

export default CommentList;
