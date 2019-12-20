
import React, {Constructor} from 'react';
import './Canvas.css';

class Canvas extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			canvasWidth: window.innerWidth,
			canvasHeight: window.innerHeight,
			downDotX: undefined, downDotY: undefined ,
			moveDotX: undefined, moveDotY: undefined ,
			using: false,
			eraserEnabled: false
		}
		this.updateDimensions = this.updateDimensions.bind(this);
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
		console.log('down');
		const context = this.refs.canvas.getContext('2d');
		let {clientX,clientY} = aaa;
		this.setState({
			downDotX: clientX,
			downDotY: clientY,
			using: true
		})
		if(this.state.using){
			let previousDot = {x:clientX, y: clientY};
			context.beginPath();
			context.arc(clientX,clientY,1,0,Math.PI*2);
			context.fill();
		}
	}

	drawLine(aaa){
		console.log('move');
		const context = this.refs.canvas.getContext('2d');
		let x = aaa.clientX;
		let y = aaa.clientY;
		if(this.state.eraserEnabled){
			context.clearRect(x,y,30,30);
		}else{
			if(this.state.using){
				this.setState({
					moveDotX: x,
					moveDotY: y
				})
				let presentDot = {x: x, y: y};
				let previousDot = {x: this.state.downDotX, y: this.state.downDotY};
				
				context.beginPath();
				context.moveTo(this.state.downDotX, this.state.downDotY);
				context.lineTo(this.state.moveDotX, this.state.moveDotY);
				context.stroke();
				context.closePath();
				
				// 怎么把当前的点的坐标，赋给上一个点的坐标？？？
				// ???
			}
		}
	}

	stop(){
		this.setState({
			using: false
		})	
	}

	render(){
		return(
				<canvas ref="canvas"
						width={this.state.canvasWidth}
						height={this.state.canvasHeight}
						onMouseDown={this.dot.bind(this)}
						onMouseMove={this.drawLine.bind(this)}
						onMouseUp={this.stop.bind(this)}
				></canvas>	
		)
	}

	/*componentWillUnmount(){
		window.removeEventListener("resize", this.updateDimensions);
	}*/
}

export default Canvas;
