// This is Canvas.js
import React, {Constructor} from 'react';
import './Canvas.css';

class Canvas extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			canvasWidth: window.innerWidth,
			canvasHeight: window.innerHeight 
		}
		this.updateDimensions = this.updateDimensions.bind(this);
		this.dot = this.dot.bind(this);
		this.drawLine = this.drawLine.bind(this);
	}

	conponentDidMount(){
		window.addEventListener("resize", this.updateDimensions);
		this.dot();
	}
	
	updateDimensions(){
		this.setState({
			canvasWidth: window.innerWidth, 
			canvasHeight: window.innerHeight,
		})
	}

	dot(aaa){
		const context = this.refs.canvas.getContext('2d');
		let {clientX,clientY} = aaa;
		let previousDot = {x:clientX, y: clientY};

		context.beginPath();
		context.arc(clientX,clientY,1,0,Math.PI*2);
		context.fill();
	}

	drawLine(aaa){
		const context = this.refs.canvas.getContext('2d');
		let {x,y} = aaa;
		let presentDot = {x: x, y: y};
		context.beginPath();
		context.moveTo(x1,y1);
		context.lineTo(x2,y2);
		context.stroke();
	}

	render(){
		return(
				<canvas ref="canvas"
						width={this.state.canvasWidth}
						height={this.state.canvasHeight}
						onMouseDown={this.dot}
						onMouseMove={this.drawLine}
				></canvas>	
		)
	}

	/*componentWillUnmount(){
		window.removeEventListener("resize", this.updateDimensions);
	}*/
}

export default Canvas;
