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
		let boxes = [];

		let index = 0;
		for(let i = 0; i < ROWS; i++) {
			for (let j = 0; j < COLS; j++) {
				boxes.push(
					<Box item={index} key={index} row={i} col={j} onClick={this.onTitleClick} />
				);
				index++;
			}

		}

		shuffle(boxes);

		this.state = {
			boxes: boxes
		};
	}

	onTitleClick(item, position) {
		console.log(`item: ${item},  position: ${position}`);
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
		items: ITEMS
	};
}

export default withStyles(styles)(connect(mapStateToProps)(SliderGame))