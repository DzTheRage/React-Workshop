import React, { Component } from 'react';
import './App.css';
import { fetchWeather } from "../../util/weatherapi"
import _ from "lodash"
import WeekWeather from '../WeekWeather/WeekWeather'
import SearchBar from '../SearchBar/SearchBar'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      city:"Huntsville",
      searchedCity:"Huntsville",
      weekWeather: [],
      country:"US",
    }
    this.getWeather = this.getWeather.bind(this);
  }

  getWeather(searchedCity = this.state.city) {
    fetchWeather(searchedCity)
      .then((response) => {
        var weather = _.map(response.list, (dayWeather) => {
          return {
            dayWeather,
            country: response.city.country,
            city: response.city.name
          }
        });

        this.setState({
          weekWeather: weather,
          city: this.state.searchedCity,
        });
      })
  }

  render() {
    return (
      <div className="WeatherContainer">
        <WeekWeather weekWeather={this.state.weekWeather}/>
        <SearchBar searchedcity={this.state.searchedCity} city={this.state.city} onSearch={this.getWeather}/>
      </div>
    );
  }
}

export default App;
