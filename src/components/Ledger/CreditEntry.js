import React, { PropTypes } from 'react';
import Immutable from 'immutable';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import styles from '../../styles/ledger.css';

function CreditEntry({
	item = Immutable.Map(),
	index
}) {
	const balance = item.getIn(['balance']);
	return (
		<tr className={styles.creditRow} key={`credit-${index}`}>
			<td></td>
			<td></td>
			<td>
				{item.getIn(['credit', 'account'])}
			</td>
			<td className={styles.debitAmount}></td>
			<td className={styles.creditAmount}>
				<FormattedNumber
					value={item.getIn(['credit', 'amount'])}
					format={'twoDecimal'} />
			</td>
			<td>
				<span className={balance >= 0 ? styles.positiveBalance : styles.negativeBalance}>
					<FormattedNumber
						value={item.getIn(['balance'])}
						format={'twoDecimal'} />
				</span>
			</td>
		</tr>
	);
}

CreditEntry.propTypes = {
	item: PropTypes.instanceOf(Immutable.Map).isRequired,
	index: PropTypes.number.isRequired,
};

export default withStyles(styles)(CreditEntry);