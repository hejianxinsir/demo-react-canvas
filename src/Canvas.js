// This is Canvas.js
import React, {Constructor} from 'react';
import './CanvasJs.js';
import './Canvas.css';

class Canvas extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			id: "canvas",
		}
	}

	render(){
		return(
			<div>
				<canvas id={this.state.id}></canvas>	
			</div>
		)
	}
}

export default Canvas;
