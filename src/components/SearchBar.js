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
      <form className="ui form" onSubmit={this.handleSubmit}>
        <input className="ui fluid icon input" type="text" placeholder="Search for a video" onChange={this.handleChange} />
      </form>
    );
  }
}

export default SearchBar;
