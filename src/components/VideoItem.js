import React from 'react';

const VideoItem = (props) => {
  return(
    <div className="item">
      <img
        className="ui image"
        style={{ maxWidth: 240 }}
        src={props.video.snippet.thumbnails.medium.url}
        alt={props.video.snippet.description}
      />
      <div className="content">
        <a className="header" href={`https://www.youtube.com/watch?v=${props.video.id.videoId}`} >
          { props.video.snippet.title }
        </a>
        <div className="description">{props.video.snippet.channelTitle}</div>
      </div>
    </div>
  );
}

export default VideoItem;
