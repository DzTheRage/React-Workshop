import React, { Component } from 'react';
import './WeekWeather.css';
import WeatherItem from '../WeatherItem/WeatherItem'

class WeekWeather extends Component {
  render() {
    return (
      <div className="WeekContainer">
        <div className="CurrentDay">
          <WeatherItem weekWeather={this.props.WeekWeather}/>
        </div>
        <div className="OtherDays">
          <div className="OtherDayColumns DayOne">
            <WeatherItem />
          </div>
          <div className="OtherDayColumns DayTwo">
            <WeatherItem />
          </div>
          <div className="OtherDayColumns DayThree">
            <WeatherItem />
          </div>
          <div className="OtherDayColumns DayFour">
            <WeatherItem />
          </div>
          <div className="OtherDayColumns DayFive">
            <WeatherItem />
          </div>
          <div className="OtherDayColumns DaySix">
            <WeatherItem />
          </div>
          <div className="OtherDayColumns DaySeven">
            <WeatherItem />
          </div>
        </div>
      </div>
    );
  }
}

export default WeekWeather;