import { SET_INITIAL_LEDGER_STATE } from '../constants';

export function setInitialState() {
	return {
		type: SET_INITIAL_LEDGER_STATE,
		payload: {
			initialBalance: 2020,
			entries: [
				{
					date: '1/31/2016',
					balance: 0.00,
					debit: {
						account: 'Payment from Fab',
						amount: 5000.00
					},
					credit: {
						account: 'Shipment from Fab',
						amount: 5000.00
					}
				}
			]
		}
	}
}