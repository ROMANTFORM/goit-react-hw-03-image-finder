import React, { Component } from 'react';
import './SearchBar.css';
import { ReactComponent as IconSearch } from '../../icons/icon-search.svg';

class SearchBar extends Component{
  state = {
    inputValue: ''
  };
  
  handleChange = evt => {
    this.setState({ inputValue: evt.target.value })
    console.log(evt.target.value)
  };

  handleClick = evt => {
    evt.preventDefault();
    this.props.getValue(this.state.inputValue)

    console.log(this.state)
  };

    render() {
        return (
<header className="Searchbar">
  <form className="SearchForm">
    <button
        type="submit"
        className="SearchForm-button"
        onClick={this.handleClick}
          >
      <IconSearch width="20" height="20" fill="white"/>
    </button>

    <input
      className="SearchForm-input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={this.state.value}
      onChange={this.handleChange}
      
    />
  </form>
</header> 
        )
    };
};

export default SearchBar;