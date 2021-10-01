import React, { useState } from "react";
import CommentBox from "../CommentBox/CommentBox";
import CommentList from "../CommentBox/CommentList";

const VideoDetail = ({ video }) => {
  const [comments, setComments] = useState([]);

  if (!video) {
    return <div>Loading...</div>;
  }

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className='ui embed'>
        <iframe src={videoSrc} title='videoPlayer' />
      </div>
      <div className='ui segment'>
        <h4 className='ui header'>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
      <div className='ui segment'>
        <CommentBox addComment={addComment} />
        <CommentList comments={comments} />
      </div>
    </div>
  );
};

export default VideoDetail;
