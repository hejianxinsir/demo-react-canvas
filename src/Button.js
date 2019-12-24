
import React from 'react';
import './Button.css';

export default class Button extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			x: undefined
		}
	}

	render(){
		return(
			<button className="eraser">{this.props.value}</button>
		)
	}
}

console.log('我是button.js');
