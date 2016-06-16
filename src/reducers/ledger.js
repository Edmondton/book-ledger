import Immutable from 'immutable';

import { SET_INITIAL_LEDGER_STATE } from '../constants';

export default function ledgerReducer(state = Immutable.Map(), {type, payload}) {
	if (!type) {
		return state;
	}

	switch (type) {
		default:
			return state;
		case SET_INITIAL_LEDGER_STATE:
			const { initialBalanace } = payload;
			return state.withMutations(intermState => {
				intermState.set('balance', initialBalanace);
			});
	}
}

