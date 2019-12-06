// This is Canvas.js
import React, {Constructor} from 'react';
import './Canvas.css';

class Canvas extends React.Component{
	constructor(props){
		super(props)
		this.myRef = React.createRef();
		this.state = {
			canvasWidth: window.innerWidth,
			canvasHeight: window.innerHeight 
		}
		this.updateDimensions = this.updateDimensions.bind(this);
		this.dot = this.dot.bind(this);
	}

	conponentDidMount(){
		window.addEventListener("resize", this.updateDimensions);
		const canvas = this.props.ref;
		const context = canvas.getContext('2d');
	}
	
	updateDimensions(){
		this.setState({
			canvasWidth: window.innerWidth, 
			canvasHeight: window.innerHeight,
		})
	}

	dot(){
			context.beginPath();
			context.arc(100,100,10,0,Math.PI*2)
			context.stroke();
	}
	

	render(){
		return(
				<canvas ref={this.myRef.current}
						width={this.state.canvasWidth}
						height={this.state.canvasHeight}
						onClick = {this.dot}
				></canvas>	
		)
	}

	/*componentWillUnmount(){
		window.removeEventListener("resize", this.updateDimensions);
	}*/
}

export default Canvas;
