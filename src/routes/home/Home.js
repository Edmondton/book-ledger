import React, {PropTypes} from 'react';
import Immutable from 'immutable';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import Ledger from '../../components/Ledger/Ledger';
import Balance from '../../components/Ledger/Balance';
import JournalEntry from '../../components/Ledger/JournalEntry';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../styles/home.css';

const title = 'Book Ledger';

function Home({balance, entries}, context) {
	context.setTitle(title);

	return (
		<div className={s.root}>
			<div className={s.container}>
				<section className={s.ledgerHeader}>
					<Balance amount={balance} />
					<JournalEntry entries={entries} />
				</section>
				<Ledger entries={entries} />
			</div>
		</div>
	);
}

Home.propTypes = {
	balance: PropTypes.number.isRequired,
	entries: PropTypes.instanceOf(Immutable.List)
};

Home.contextTypes = {setTitle: PropTypes.func.isRequired};

function mapStateToProps(state) {
	return {
		balance: state.getIn(['ledger', 'balance']) || 0,
		entries: state.getIn(['ledger', 'entries']) || Immutable.List()
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({}, dispatch);
}

export default withStyles(s)(connect(mapStateToProps, mapDispatchToProps)(Home));
