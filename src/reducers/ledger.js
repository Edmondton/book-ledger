import Immutable from 'immutable';
import moment from 'moment';

import { SET_INITIAL_LEDGER_STATE, ADD_JOURNAL_ENTRY } from '../constants';

export default function ledgerReducer(state = Immutable.Map(), {type, payload}) {
	if (!type) {
		return state;
	}

	switch (type) {
		default:
			return state;
		case ADD_JOURNAL_ENTRY:
			const data = payload;

			const items = state.get('entries').push(Immutable.fromJS({
				id: moment().unix(),
				date: moment(data.date).format('MM/DD/YYYY'),
				balance: data.balance,
				debit: {
					account: data.debit.account,
					amount: data.debit.amount
				},
				credit: {
					account: data.credit.account,
					amount: data.credit.amount
				}
			}));

			const initBalance = state.get('balance');
			const balance = items.reduce((init, item) => {
				return init + item.get('balance');
			}, initBalance);

			return state.withMutations(intermState => {
				intermState.set('balance', balance);
				intermState.set('entries', items);
			});
			break;
		case SET_INITIAL_LEDGER_STATE:
			const { initialBalance, entries } = payload;
			return state.withMutations(intermState => {
				intermState.set('balance', initialBalance);
				intermState.set('entries', Immutable.fromJS(entries));
			});
			break;

	}
}

