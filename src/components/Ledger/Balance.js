import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import styles from '../../styles/balance.css';

function Balance({
	amount
}) {
	let tableClass = amount >= 0 ? styles.positiveBalanceTable : styles.negativeBalanceTable;
	let status = amount >= 0 ? 'Balanced' : 'Unbalanced';

	return (
		<div className={styles.container}>
			<table className={tableClass}>
				<tbody>
					<tr>
						<td className={styles.status}>Account Currently</td>
						<td>{status}</td>
					</tr>
					<tr>
						<td className={styles.balance}>Running Balance</td>
						<td>{amount}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

Balance.propTypes = {
	amount: PropTypes.number.isRequired
};

export default withStyles(styles)(Balance);
