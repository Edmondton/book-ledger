import Immutable from 'immutable';

import ledger from './ledger';

export default function reducers(state = Immutable.Map(), action) {
	return state.merge({
		ledger: ledger(state.get('ledger'), action)
	});
}
