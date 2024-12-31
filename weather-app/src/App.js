import React, {useState} from 'react';
import axios from 'axios';

function App() {
    const url = "https://";
    
  return (
    <div className="App">
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
		    <p>80<sup>o</sup>F</p>
		</div>
		<div className="humidity">
		    <p>20%</p>
		</div>
		<div className="wind">
		    <p>12 KPH</p>
		</div>
	    </div>
	</div>
    </div>
  );
}

export default App;
