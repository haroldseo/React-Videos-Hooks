import React, { useState, useEffect } from "react";

import SearchBar from "./SearchBar/SearchBar";
import VideoList from "./VideoList/VideoList";
import VideoDetail from "./VideoDetail/VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("nba");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className='ui container'>
      <SearchBar onSearchSubmit={search} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='five wide column'>
            {/* Whenever we have an argument and it gets passed directly to a function*/}
            {/* (video) => setSelectedVideo(video) this can be condensed to just setSelectedVideo*/}
            <VideoList onVideoSelect={(video) => setSelectedVideo(video)} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
