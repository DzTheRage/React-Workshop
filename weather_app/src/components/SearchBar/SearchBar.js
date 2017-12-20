import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }
    
    search(value){
        this.props.onSearch(value);
    }
    
    handleTermChange(event){
        this.search(event.target.value);
    }
    
    render(){
        return (
           <div className="SearchBar">
            <input className="Input" placeholder="Enter a city to search." onChange = {this.handleTermChange}/>
          </div> 
        );
    }
}

export default SearchBar;