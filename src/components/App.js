import React, { Component } from 'react';
import SearchRecipes from './SearchRecipes';
import RecipeList from './RecipeList';
import '../styles/index.css';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class App extends Component {
	constructor() {
		super();

		this.state = {
			message: ''
		};
	}
	search() {
		const msgArr = [
			'I love you billllu',
			'You are my happy spot ',
			'You are my choco pie ',
			'You are my darling sweetheart',
			'I love you so much ',
			'You are a chhotu puddi',
			'I have crush on you since 7th',
			'I love your cutie cheeks',
			'Muahhhh Muahhhh Muahhhh Muahhhh Muahhhh Muahhhh Muahhhh',
			'You are my precious gem',
			'Hottie Bacchi'
		];
		const random = Math.floor(Math.random() * msgArr.length);
		this.setState({ message: msgArr[random] });
	}
	render() {
		return (
			<div>
				<div>
					<h2>Recipe Finder</h2>
					<SearchRecipes />
					<RecipeList />
				</div>
				<div>
					<Form inline>
						<FormGroup>
							<ControlLabel>{this.state.message}</ControlLabel>
						</FormGroup>

						<Button onClick={() => this.search()}>Message For You</Button>
					</Form>
				</div>
			</div>
		);
	}
}

export default App;
