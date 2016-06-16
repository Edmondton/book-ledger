import React, { PropTypes } from 'react';
import moment from 'moment';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import styles from '../../styles/journalEntry.css'

function JournalEntry({

}) {
	return (
		<div className={styles.container}>
			<form>
				<fieldset className={styles.fieldSet}>
					<label htmlFor="entryDate">Entry Date:</label>
					<input type="date" id="entryDate" defaultValue={moment().format('YYYY-MM-DD')} />
				</fieldset>
				<fieldset className={styles.fieldSet}>
					<label>Debit:</label>
					<input type="text" id="debitAccount" placeholder="Account Name" />
					<input type="number" placeholder="Amount" />
				</fieldset>
				<fieldset className={styles.fieldSet}>
					<label>Credit:</label>
					<input type="text" id="creditAccount" placeholder="Account Name" />
					<input type="number" placeholder="Amount" />
				</fieldset>
			</form>
		</div>
	);
}



export default withStyles(styles)(JournalEntry);