import React from 'react';
import youtube from '../api/youtube'
import SearchBar from './SearchBar';

class App extends React.Component {
  handleSubmittedValue = async (value) => {
    const response = await youtube.get('/search', { params: { q: value } });
    console.log(response.data.items);
  }

  render() {
    return(
      <div>
        <SearchBar handleSubmittedValue={this.handleSubmittedValue} />
      </div>
    )
  }
}

export default App;
