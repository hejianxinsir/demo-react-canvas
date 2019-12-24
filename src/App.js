import React from 'react';
import logo from './logo.svg';
import './App.css';
import Canvas from './Canvas.js';
import Button from './Button.js';

class App extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
	 return (
    <div className="App">
			<Canvas value="canvas" />
		</div>
 	 );
	}
}

export default App;
