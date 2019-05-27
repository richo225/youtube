import React from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  handleSubmittedValue = async (value) => {
    const response = await youtube.get('/search', { params: { q: value } });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
     });
  }

  handleSelectedVideo = (video) => {
    this.setState({ selectedVideo: video });
  }

  render() {
    return(
      <div className="ui container">
        <SearchBar handleSubmittedValue={this.handleSubmittedValue} />
        <div className="ui grid">
          <div className="ui row">
            <div className="ui eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} handleSelectedVideo={this.handleSelectedVideo} />
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default App;
