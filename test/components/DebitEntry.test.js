import React from 'react';
import Immutable from 'immutable';
import { shallow } from 'enzyme';
import DebitEntry from '../../src/components/Ledger/DebitEntry';

describe('Debit Entry Component ', () => {
	let wrapper = null;
	let data = null;

	beforeEach(() => {
		data = Immutable.fromJS({
			id: 1,
			date: '2/31/2016',
			balance: 0.00,
			debit: {
				account: 'Debit Entry ',
				amount: 6000.01
			}
		});

		wrapper = shallow(
			<DebitEntry item={data} index={1} deleteEntry={Function.prototype} />,
			{ context: { insertCss: () => {} } }
		);
	});

	it('should render correctly', () => {
		const debitEntry = wrapper.find('DebitEntry').shallow();

		expect(debitEntry.length).to.equal(1);
		expect(debitEntry.text()).to.contains(data.getIn(['debit', 'account']));
		expect(debitEntry.text()).to.contains(data.getIn(['date']));
		expect(debitEntry.text()).to.contains(data.getIn(['id']));
		expect(debitEntry.text()).to.contains('FormattedNumber');
	});
});