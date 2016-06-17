import { SET_INITIAL_LEDGER_STATE } from '../constants';

export function setInitialState() {
	return {
		type: SET_INITIAL_LEDGER_STATE,
		payload: {
			initialBalance: 2020,
			entries: [
				{
					id: 1,
					date: '1/31/2016',
					balance: 0.00,
					debit: {
						account: 'Payment from Fab mute',
						amount: 5000.01
					},
					credit: {
						account: 'Shipment from Fab mute',
						amount: 5000.01
					}
				}
			]
		}
	}
}