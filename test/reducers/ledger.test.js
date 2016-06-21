import ledger from '../../src/reducers/ledger';
import moment from 'moment';
import Immutable from 'immutable';
import {
	SET_INITIAL_LEDGER_STATE,
	ADD_JOURNAL_ENTRY,
	DELETE_JOURNAL_ENTRY
} from '../../src/constants/index';

describe('reducers/ledger', () => {
	it('should process correectly for initial state', () => {
		const state = ledger(undefined, {
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
		});
		expect(state.toJS()).to.deep.equal({'balance':2020,
			'entries':[{'id':1, 'date':'1/31/2016', 'balance':0,
				'debit':{'account':'Payment from Fab mute','amount':5000.01},
				'credit':{'account':'Shipment from Fab mute','amount':5000.01}}]});
	});

	it('should process correctly for delete journal entry', () => {
		const state = ledger(Immutable.fromJS({
			balance: 100,
			entries: [{
				'id': 1,
				balance: 10
			}]
		}), {
			type: DELETE_JOURNAL_ENTRY,
			payload: {
				id: 1,
				balance: 5
			}
		});
		expect(state.toJS()).to.deep.equal({ balance: 90, entries: [] });
	});

	it('should process correctly for add journal entry', () => {
		const state = ledger(Immutable.fromJS({
			balance: 2000,
			entries: []
		}), {
			type: ADD_JOURNAL_ENTRY,
			payload: {
				date: moment(),
				balance: 100,
				debit: {
					account: 'account',
					amount: 20
				},
				credit: {
					account: 'credit',
					amount: 20
				}
			}
		});
		expect(state.toJS().balance).to.equal(2100);
	});
});