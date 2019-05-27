import React from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  handleSubmittedValue = async (value) => {
    const response = await youtube.get('/search', { params: { q: value } });

    this.setState({ videos: response.data.items });
  }

  handleSelectedVideo = (video) => {
    console.log('This is the selected video', video);
  }

  render() {
    return(
      <div className="ui container">
        <SearchBar handleSubmittedValue={this.handleSubmittedValue} />
        <VideoList videos={this.state.videos} handleSelectedVideo={this.handleSelectedVideo} />
      </div>
    );
  };
}

export default App;
