import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import styles from './styles.css';

function Box ({ item, row, col, onClick = Function.prototype }) {
	const click = () => {
		onClick(item, row, col);
	};

	return (
		<div className={styles.box} draggable="true" onClick={click}>
			{item !== 9 ? item: ''}
		</div>
	)
}

export default withStyles(styles)(Box);