import React from 'react';
import { shallow } from 'enzyme';
import Balance from '../../src/components/Ledger/Balance';

describe('Balance Component', () => {
	let wrapper = null;

	it('should render correctly for positive amount', () => {
		wrapper = shallow(
			<Balance amount={1} />,
			{ context: { insertCss: () => {} } }
		);

		const balance =  wrapper.find('Balance').render();
		const html = balance.html();

		expect(balance.length).to.equal(1);
		expect(html).to.contain('Balanced');
		expect(html).to.contain('1');
	});

	it('should render correctly for negative amount', () => {
		wrapper = shallow(
			<Balance amount={-2} />,
			{ context: { insertCss: () => {} } }
		);

		const balance =  wrapper.find('Balance').render();
		const html = balance.html();

		expect(balance.length).to.equal(1);
		expect(html).to.contain('Unbalanced');
		expect(html).to.contain('-2');
	});
});