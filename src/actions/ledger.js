import { SET_INITIAL_LEDGER_STATE, ADD_JOURNAL_ENTRY, DELETE_JOURNAL_ENTRY } from '../constants';

export function addJournalEntry(data) {
	return {
		type: ADD_JOURNAL_ENTRY,
		payload: data
	}
}

export function deleteEntry(id) {
	return {
		type: DELETE_JOURNAL_ENTRY,
		payload: id
	}
}

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