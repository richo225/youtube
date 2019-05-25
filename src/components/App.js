import React from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

class App extends React.Component {
  state = { videos: [] };

  handleSubmittedValue = async (value) => {
    const response = await youtube.get('/search', { params: { q: value } });

    this.setState({ videos: response.data.items });
  }

  render() {
    return(
      <div>
        <SearchBar handleSubmittedValue={this.handleSubmittedValue} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  };
}

export default App;
