import React, { Component } from 'react';
import Title from './components/Title/Title';
import Weather from './components/Weather/Weather';
import Form from './components/Form/Form';

const API_KEY = '51120a1852d3bb845834ebad87c9648e'
const SAN_DIEGO_ID = '3987342';
const FORECAST_URL_SD = 'api.openweathermap.org/data/2.5/forecast?id=3987342&APPID=51120a1852d3bb845834ebad87c9648e'

class App extends Component {
  state = {
    temp: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: ""
  };

  getWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    if (city && country) {
      console.log(data);
      this.setState({
        temp: data.main.temp,
        humidity: data.main.humidity,
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temp: "",
        humidity: "",
        city: "",
        country: "",
        description: "",
        error: "Please enter the values"
      });
    }
  }

  render() {
    return(
      <div> 
        <Title />
        <Form getWeather={this.getWeather}/>
        <Weather 
          temp={this.state.temp}
          humidity={this.state.humidity} 
          city={this.state.city}
          country={this.state.country}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    )
  }

}

export default App;