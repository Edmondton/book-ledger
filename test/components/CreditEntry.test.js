import React from 'react';
import Immutable from 'immutable';
import { shallow } from 'enzyme';
import CreditEntry from '../../src/components/Ledger/CreditEntry';
import { FormattedNumber } from 'react-intl';

describe('CreditEntry Component', () => {
	let wrapper = null;
	let data = null;

	beforeEach(() => {
		data = Immutable.fromJS({
			id: 1,
			date: '1/31/2016',
			balance: 0.00,
			credit: {
				account: 'Shipment from Fab mute',
				amount: 5000.01
			}
		});

		wrapper = shallow(
			<CreditEntry item={data} index={0} />,
			{ context: { insertCss: () => {} } }
		);
	});

	it('should render correctly', () => {
		const creditEntry = wrapper.find('CreditEntry').shallow();

		expect(creditEntry.length).to.equal(1);
		expect(creditEntry.text()).to.contains(data.getIn(['credit', 'account']));
		expect(creditEntry.text().contains('FormattedNumber')).to.equal(true);
	});
});