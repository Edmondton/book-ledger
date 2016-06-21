import React, { PropTypes, Component } from 'react';
import { FormattedNumber } from 'react-intl';
import moment from 'moment';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import styles from '../../styles/journalEntry.css'

class JournalEntry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			balance: null,
			errors: []
		};
		this.calcBalance = this.calcBalance.bind(this);
	}

	clear() {
		this.refs.debitAccount.value = '';
		this.refs.debitAmount.value = '';
		this.refs.creditAccount.value = '';
		this.refs.creditAmount.value = '';
	}

	isValid() {
		const entryDate = this.refs.entryDate.value;
		const debitAccount = this.refs.debitAccount.value;
		const debitAmount = this.refs.debitAmount.value;
		const creditAccount = this.refs.creditAccount.value;
		const creditAmount = this.refs.creditAmount.value;
		let errors = [];

		if (!entryDate) {
			errors.push('Entry Date Required');
		}
		if (!debitAccount) {
			errors.push('Debit Account Required');
		}
		if (!debitAmount) {
			errors.push('Debit Amount Required');
		}
		if (!creditAccount) {
			errors.push('Credit Account Required');
		}
		if (!creditAmount) {
			errors.push('Credit Amount Required');
		}
		this.setState({
			errors: errors
		});

		return entryDate && debitAccount && debitAmount && creditAccount && creditAmount;
	}

	calcBalance() {
		const debitAmount = this.refs.debitAmount.value;
		const creditAmount = this.refs.creditAmount.value;

		if (debitAmount && creditAmount) {
			this.setState({
				balance: debitAmount - creditAmount
			});
		}
	}

	onSubmitClick() {
		const { addJournalEntry } = this.props;

		if (this.isValid()) {
			addJournalEntry({
				date: this.refs.entryDate.value,
				balance: this.state.balance,
				debit: {
					account: this.refs.debitAccount.value,
					amount: this.refs.debitAmount.value
				},
				credit: {
					account: this.refs.creditAccount.value,
					amount: this.refs.creditAmount.value
				}
			});
			this.setState({
				balance: null,
				errors: []
			});
			this.clear();
		}
	}

	getErrors() {
		if (this.state.errors && this.state.errors.length) {
			const nodes = this.state.errors.map((item, index) => {
				return (
					<li key={index}>{item}</li>
				)
			})

			return (
				<ul className={styles.errors}>
					{nodes}
				</ul>
			);
		}
	}

	render() {
		const { balance } = this.state;
		const balanceStyle = balance ? (balance >= 0 ? styles.positiveBalance : styles.negativeBalance): styles.balance;

		return (
			<div className={styles.container}>
				<form>
					<fieldset className={styles.fieldSet}>
						<label htmlFor="entryDate">Entry Date:</label>
						<input ref="entryDate" type="date" id="entryDate" defaultValue={moment().format('YYYY-MM-DD')} />
					</fieldset>
					<fieldset className={styles.fieldSet}>
						<label htmlFor="debitAccount">Debit:</label>
						<input ref="debitAccount" type="text" id="debitAccount" placeholder="Account Name" />
						<input ref="debitAmount" type="number" placeholder="Amount" id="debitAmount" onBlur={this.calcBalance} />
					</fieldset>
					<fieldset className={styles.fieldSet}>
						<label htmlFor="creditAccount">Credit:</label>
						<input ref="creditAccount" type="text" id="creditAccount" placeholder="Account Name" />
						<input ref="creditAmount" type="number" placeholder="Amount" id="creditAmount" onBlur={this.calcBalance} />
					</fieldset>
					<fieldset className={styles.fieldSet}>
						<label>Balance:</label>
						<span style={{marginLeft: 10}} className={balanceStyle}>
							<FormattedNumber
								value={balance}
								format={'twoDecimal'} />
						</span>
					</fieldset>
					{this.getErrors()}
					<fieldset className={styles.fieldSet}>
						<input type="button" value="Submit" onClick={this.onSubmitClick.bind(this)} />
						<input type="reset" value="Reset" style={{marginLeft: 10}} onClick={this.clear.bind(this)} />
					</fieldset>
				</form>
			</div>
		);
	}
}

JournalEntry.propTypes = {
	addJournalEntry: PropTypes.func.isRequired
};

export default withStyles(styles)(JournalEntry);