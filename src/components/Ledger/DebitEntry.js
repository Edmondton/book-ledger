import React, { PropTypes } from 'react';
import Immutable from 'immutable';
import { FormattedNumber } from 'react-intl';
import he from 'he';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import styles from '../../styles/ledger.css';

function DebitEntry({
	item = Immutable.Map(),
	index,
	deleteEntry = Function.prototype
}) {
	const deleteButton = (
		<button className={styles.btn} onClick={deleteEntry.bind(this, item.get('id'))}>
			{he.decode('&#9746;')}
		</button>
	);

	return (
		<tr className={styles.debitRow} key={`debit-${index}`}>
			<td>{index + 1} {deleteButton}</td>
			<td>
				{item.getIn(['date'])}
			</td>
			<td>
				{item.getIn(['debit', 'account'])}
			</td>
			<td className={styles.debitAmount}>
				<FormattedNumber
					value={item.getIn(['debit', 'amount'])}
					format={'twoDecimal'} />
			</td>
			<td className={styles.creditAmount}></td>
			<td></td>
		</tr>
	);
}

DebitEntry.propTypes = {
	item: PropTypes.instanceOf(Immutable.Map).isRequired,
	index: PropTypes.number.isRequired,
	deleteEntry: PropTypes.func.isRequired
};

export default withStyles(styles)(DebitEntry);