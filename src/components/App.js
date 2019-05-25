import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
  handleSubmittedValue = (value) => {
    console.log(value);
  }

  render() {
    return(
      <div>
        < SearchBar handleSubmittedValue={this.handleSubmittedValue}/>
      </div>
    )
  }
}

export default App;
