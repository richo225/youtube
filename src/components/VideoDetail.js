import React from 'react';

const VideoDetail = (props) => {
  if (!props.video) {
    return <div className="ui active centered inline loader"></div>;
  }

  return <div> {props.video.snippet.title } </div>;
};

export default VideoDetail;
