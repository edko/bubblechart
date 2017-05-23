import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BubbleChart from './components/bubblechart';
import Layout from './Layout';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div>

				<Router>
					<div>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/bubblechart">BubbleChart</Link>
							</li>
						</ul>
						<Layout>
							<Route path="/bubblechart" component={BubbleChart} />
						</Layout>
					</div>

				</Router>
			</div>
		);
	}
}

export default App;
