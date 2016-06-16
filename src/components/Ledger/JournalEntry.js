import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import styles from '../../styles/journalEntry.css'

function JournalEntry({

}) {
	return (
		<div className={styles.container}>
			<form>
				<fieldset className={styles.fieldSet}>
					<label htmlFor="entryDate">Entry Date</label>
					<input type="date" id="entryDate" />
				</fieldset>
			</form>
		</div>
	);
}



export default withStyles(styles)(JournalEntry);