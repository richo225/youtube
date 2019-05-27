import './VideoItem.css';
import React from 'react';

const VideoItem = (props) => {
  return(
    <div className="video-item item" onClick={() => props.handleSelectedVideo(props.video)}>
      <img
        className="ui image"
        src={props.video.snippet.thumbnails.medium.url}
        alt={props.video.snippet.description}
      />
      <div className="content">
        <div className="header">{ props.video.snippet.title }</div>
        <div className="description">{props.video.snippet.channelTitle}</div>
      </div>
    </div>
  );
}

export default VideoItem;
