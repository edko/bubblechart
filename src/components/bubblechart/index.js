import React, { Component } from 'react';
import data from './data.json';
import BubbleGraph from './D3Bubbles';

class BubbleChart extends Component {

	render(){
		return(
			<BubbleGraph data={data}></BubbleGraph>
		);
	}
}

export default BubbleChart;
