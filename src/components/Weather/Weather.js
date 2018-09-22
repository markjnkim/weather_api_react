import React from 'react';

const Weather = props => (
  <div className="weather__info">
      { 
        props.city && props.country && <p className="weather__key">Location: 
        <span>{ props.city}, {props.country} </span>
        </p> 
        }
      { 
        props.temp && <p className="weather__key">Current Temp: <span>{props.temp}</span>
        </p> 
        }
      { 
        props.humidity && <p className="weather__key">Humidity: <span>{props.humidity}</span>
        </p> 
        }
      { 
        props.description && <p className="weather__key">Condition: <span>{props.description}</span>
        </p> 
        }
      { 
        props.error && <p className="weather__key"><span>{props.error}</span></p>
        } 
  </div>
);
export default Weather;