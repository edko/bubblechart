import React from 'react';
import d3 from 'd3';
import { forceSimulation, forceManyBody, forceX, forceY, forceCollide, strength } from 'd3-force';
import { scaleSqrt, scaleLinear } from 'd3-scale';
import data from './data.json';
// import d3 from 'd3-force';


class BubbleGraph extends React.Component {
	constructor(props) {
		super(props);
		this.state = {nodes: this.props.data};
	}

  	componentDidMount() {
		const radiusScale = scaleSqrt().domain([25, 394]).range([20,80]);
		this.force = forceSimulation(this.state.nodes)
			// .force("charge", forceManyBody().strength(this.props.forceStrength))
			.force("x", forceX(this.props.width / 2).strength(0.05))
			.force("y", forceY(this.props.height / 2).strength(0.05))
			.force("collide", forceCollide(function(data){
				return radiusScale(data.count)+1;
			}))
		;
		this.force.on('tick', () => this.setState({nodes: this.state.nodes}));
	}

	componentWillUnmount() {
    	this.force.stop();
  	}

	render() {
		const radiusScale = scaleSqrt().domain([20, 394]).range([20,80]);

	    return (
	    	<svg width={this.props.width} height={this.props.height}>
	      		{this.state.nodes.map((node, index) =>(
						<circle r={radiusScale(node.count)} cx={node.x} cy={node.y} fill="lightblue" key={index}/>
        		))}
        		{this.state.nodes.map((node, index) =>(
        			<text key={index} x={node.x} y={node.y}
				 		fontFamily="sans-serif"
				 		fontSize="12px"
				 		textAnchor="middle"
				 		fill="black">{node.word}</text>
				))}
	      	</svg>
	    );
  	}
}

export default BubbleGraph;

BubbleGraph.defaultProps = {
  width: 800,
  height: 600,
  forceStrength: -60
};

// const nodes = [];
// for (let i = 0; i < 100; i++) {
//   nodes.push({
//   	r: (Math.random() * 5 ) + 2,
//     x: 0,
//     y: 0
//   });
// }

// ReactDOM.render(
//   <BubbleGraph nodes={nodes} />,
//   document.getElementById('container')
// );
