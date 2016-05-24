import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import shuffle from 'lodash/shuffle';

import Box from '../../components/Box/Box';

import styles from './styles.css';

const ROWS = 3;
const COLS = 3;

class SliderGame extends Component {
	constructor(props) {
		super(props);
		this.onTitleClick = this.onTitleClick.bind(this);
		let titles = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
		let boxes = [];

		let index = 0;
		for(let i = 0; i < ROWS; i++) {
			for (let j = 0; j < COLS; j++) {
				boxes.push(
					<Box item={titles[index]} key={index} row={i} col={j} onClick={this.onTitleClick} />
				);
				index++;
			}

		}

		this.state = {
			boxes: boxes
		};
	}

	onTitleClick(item, row, col) {
		console.log(`item: ${item},  row: ${row}, col: ${col}`);
	}

	render() {
		const { boxes } = this.state;
		return (
			<main className={styles.mainContainer}>
				{boxes}
			</main>
		);
	}
}

function mapStateToProps(state) {
	return {
	};
}

export default withStyles(styles)(connect(mapStateToProps)(SliderGame))