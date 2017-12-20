import React, { Component } from 'react';
import { getIcon } from "../../util/icon"
import './WeatherItem.css';

class WeatherItem extends Component {
  render() {

    return (
      <div className="WeatherItem">
        <p className="Location">
          <span className="city">{this.props.city}</span>
          <span className="country">Country</span>
        </p>
        <div className="TemperatureInfo">
        </div>
        <p className="Timestamp">
        Today
        </p>
      </div>
    );
  }
}

export default WeatherItem;