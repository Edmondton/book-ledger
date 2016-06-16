import { SET_INITIAL_LEDGER_STATE } from '../constants';

export function setInitialState() {
	return {
		type: SET_INITIAL_LEDGER_STATE,
		payload: {
			initialBalanace: 2020
		}
	}
}