import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import styles from '../../styles/ledger.css';

function Ledger({

}) {
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
					<tr className={styles.debitRow}>
						<td>1</td>
						<td>1/31/2012</td>
						<td>Payment from Fab</td>
						<td className={styles.debitAmount}>5000.00</td>
						<td className={styles.creditAmount}></td>
						<td></td>
					</tr>
					<tr className={styles.creditRow}>
						<td></td>
						<td></td>
						<td>Shipment from Fab</td>
						<td className={styles.debitAmount}></td>
						<td className={styles.creditAmount}>5000.00</td>
						<td>0.00</td>
					</tr>
				</tbody>
			</table>
		</section>
	)
}

export default withStyles(styles)(Ledger);
