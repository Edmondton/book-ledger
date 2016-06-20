import React from 'react';
import Immutable from 'immutable';
import { shallow } from 'enzyme';
import Ledger from '../../src/components/Ledger/Ledger';
import DebitEntry from '../../src/components/Ledger/DebitEntry';

describe('JournalEntry Component', () => {
	let wrapper = null;
	let data = null;
	
	beforeEach(() => {
		data = Immutable.fromJS([{
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
		}]);

		wrapper = shallow(
			<Ledger entries={data} deleteEntry={Function.prototype} />,
			{ context: { insertCss: () => {} } }
		);
	});

	it('should render correctly', () => {
		const ledger = wrapper.find('Ledger').shallow();

		expect(ledger.length).to.equal(1);
		expect(ledger.text()).to.contains('DebitEntry');
		expect(ledger.text()).to.contains('CreditEntry');
		expect(ledger.text()).to.contains('Date');
		expect(ledger.text()).to.contains('Account');
		expect(ledger.text()).to.contains('Balance');
	});
});