import React, { PropTypes } from 'react';
import Immutable from 'immutable';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import DebitEntry from './DebitEntry';
import CreditEntry from './CreditEntry';

import styles from '../../styles/ledger.css';

function Ledger({
	entries = Immutable.List(),
	deleteEntry = Function.prototype,
	editEntry = Function.prototype
}) {

	const rows = entries.map((item, index) => {
		return [
			<DebitEntry item={item}
			            index={index}
			            deleteEntry={deleteEntry}
			            editEntry={editEntry}
			/>,
			<CreditEntry item={item} index={index} />
		];
	});

	return (
		<section>
			<table className={styles.ledgerTable}>
				<thead>
					<tr className={styles.header}>
						<td></td>
						<td>Date</td>
						<td>Account</td>
						<td className={styles.debitHeader}>Debit (+)</td>
						<td className={styles.creditHeader}>Credit (-)</td>
						<td>Balance</td>
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		</section>
	)
}

Ledger.propTypes = {
	entries: PropTypes.instanceOf(Immutable.List),
	deleteEntry: PropTypes.func.isRequired,
	editEntry: PropTypes.func.isRequired
};

export default withStyles(styles)(Ledger);
