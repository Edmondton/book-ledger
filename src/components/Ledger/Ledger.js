import React, { PropTypes } from 'react';
import Immutable from 'immutable';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import styles from '../../styles/ledger.css';

function getDebitRow(item, index) {
	return (
		<tr className={styles.debitRow} key={`debit-${index}`}>
			<td>{index + 1}</td>
			<td>
				{item.getIn(['date'])}
			</td>
			<td>
				{item.getIn(['debit', 'account'])}
			</td>
			<td className={styles.debitAmount}>
				{item.getIn(['debit', 'amount'])}
			</td>
			<td className={styles.creditAmount}></td>
			<td></td>
		</tr>
	);
}

function getCreditRow(item, index) {
	return (
		<tr className={styles.creditRow} key={`credit-${index}`}>
			<td></td>
			<td></td>
			<td>
				{item.getIn(['credit', 'account'])}
			</td>
			<td className={styles.debitAmount}></td>
			<td className={styles.creditAmount}>
				{item.getIn(['credit', 'amount'])}
			</td>
			<td>
				{item.getIn(['balance'])}
			</td>
		</tr>
	);
}

function Ledger({
	entries = Immutable.List()
}) {

	const rows = entries.map((item, index) => {
		return [
			getDebitRow(item, index),
			getCreditRow(item, index)
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
	entries: PropTypes.instanceOf(Immutable.List)
};

export default withStyles(styles)(Ledger);
