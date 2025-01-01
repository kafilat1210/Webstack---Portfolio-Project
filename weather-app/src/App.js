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
		    <p>Lagos</p>
		</div>
		<div className="temp">
		    <h1>80<sup>o</sup>F</h1>
		</div>
		<div className="description">
		    <p>Clouds</p>
		</div>
	    </div>
	    <div className="bottom">
		<div className="feels">
		    <p className="bold">80<sup>o</sup>F</p>
		    <p>Feels</p>
		</div>
		<div className="humidity">
		    <p className="bold">20%</p>
		    <p>Humidity</p>
		</div>
		<div className="wind">
		    <p className="bold">12 KPH</p>
		    <p>Windy</p>
		</div>
	    </div>
	</div>
    </div>
  );
}

export default App;
