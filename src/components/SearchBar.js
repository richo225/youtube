import React from 'react';

class SearchBar extends React.Component {
  state = { value: '' };

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmittedValue(this.state.value);
  }

  render() {
    return(
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
          <label>Search for a video</label>
            <input className="ui fluid icon input" type="text" onChange={this.handleChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
