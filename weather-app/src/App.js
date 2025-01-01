import React, {useState} from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2e4b21a881b0390e190e93a28c239a15`;

    const searchData = (event) => {
	if (event.key === 'Enter') {
	    axios.get(url).then((response) => {
		setData(response.data)
		console.log(response.data)
	    })
	    setLocation('')
	}
    }
  return (
      <div className="app">
	  <div className="search">
	      <input
		  value={location}
		  onChange={event => setLocation(event.target.value)}
		  onKeyPress={searchData}
		  placeholder="Enter Location"
		  type="text"/>
	  </div>
	<div className="container">
	    <div className="top">
		<div className="location">
		    <p>{data.name}</p>
		</div>
		<div className="temp">
		    {data.main ? <h1>{data.main.temp}<sup>o</sup>F</h1> : null}
		</div>
		<div className="description">
		    {data.weather ? <p>{data.weather[0].main}</p> : null}
		</div>
	    </div>
	    <div className="bottom">
		<div className="feels">
		    {data.main ? <p className="bold">{data.main.feels_like}<sup>o</sup>F</p> : null}
		    <p>Feels</p>
		</div>
		<div className="humidity">
		    {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
 		    <p>Humidity</p>
		</div>
		<div className="wind">
		    {data.main ? <p className="bold">{data.wind.speed} KPH</p> : null}
 		    <p>Windy</p>
		</div>
	    </div>
	</div>
    </div>
  );
}

export default App;
