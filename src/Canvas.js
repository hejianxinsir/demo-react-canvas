
import React, {Constructor} from 'react';
import './Canvas.css';
import Button from './Button.js';

class Canvas extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			canvasWidth: window.innerWidth,
			canvasHeight: window.innerHeight,
			downDotX: undefined, downDotY: undefined,
			using: false,
			eraserEnabled: false
		}
		this.updateDimensions = this.updateDimensions.bind(this);
	}

	conponentDidMount(){
		window.addEventListener("resize", this.updateDimensions);
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
		this.setState({
			downDotX: clientX,
			downDotY: clientY,
			using: true
		})
		if(this.state.using){
				context.beginPath();
				context.arc(clientX,clientY,1,0,Math.PI*2);
				context.fill();
		}
	}

	drawLine(aaa){
		const context = this.refs.canvas.getContext('2d');
		let x = aaa.clientX;
		let y = aaa.clientY;
		if(this.state.eraserEnabled){
			if(this.state.using){
				context.clearRect(x,y,30,30);
			}
		}else{
			if(this.state.using){
				this.setState({
					moveDotX: x,
					moveDotY: y
				})
				
				context.beginPath();
				context.moveTo(this.state.downDotX, this.state.downDotY);
				context.lineTo(x,y);
				context.stroke();
				context.closePath();

				this.setState((state)=>({
					downDotX: x,
					downDotY: y
				}))
			}
		}
	}

	stop(){
		this.setState({
			using: false
		})	
	}

	xxx(aaa){
		console.log(aaa);
		console.log('我是xxx函数');
	}

	render(){
		return(
				<div>
					<canvas ref="canvas"
							width={this.state.canvasWidth}
							height={this.state.canvasHeight}
							onMouseDown={this.dot.bind(this)}
							onMouseMove={this.drawLine.bind(this)}
							onMouseUp={this.stop.bind(this)}
					></canvas>
					<Button value="eraser" onClick={this.xxx.bind(this)} />
				</div>
		)
	}

	/*componentWillUnmount(){
		window.removeEventListener("resize", this.updateDimensions);
	}*/
	
}

export default Canvas;
