import React, { useState, useEffect } from "react";

import SearchBar from "./SearchBar/SearchBar";
import VideoList from "./VideoList/VideoList";
import VideoDetail from "./VideoDetail/VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState<object | null>(null);
  const [videos, search] = useVideos("nba");

  useEffect(() => {
    setSelectedVideo(videos);
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
            <VideoList onVideoSelect={(video: object) => setSelectedVideo(video)} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
