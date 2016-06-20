import React from 'react';
import Immutable from 'immutable';
import { mount } from 'enzyme';
import JournalEntry from '../../src/components/Ledger/JournalEntry';
import { IntlProvider } from 'react-intl';
import App from '../../src/components/App/App';

import jsdom from 'jsdom'
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

describe('JournalEntry', () => {
	let wrapper = null;
	
	beforeEach(() => {
		wrapper = mount(
			<App context={{ insertCss: () => {} }}>
				<JournalEntry addJournalEntry={Function.prototype} />
			</App>
		);
	});

	it('should render correctly', () => {
		const journalEntry = wrapper.find('JournalEntry');
		const inputs = wrapper.find('input');

		expect(journalEntry.length).to.equal(1);
		expect(inputs.length).to.equal(7);
	});

	it('should behave correctly for submitting', () => {
		const inputs = wrapper.find('input');
		
		console.log('inputs', inputs);
		
		/*
		const debitAccount = 'debit account';
		const debitAccountInput = wrapper.find('input')[1].simulate('change', {target: {value: debitAccount}});

		const debitAmount = 10;
		const debitAmountInput = wrapper.find('input')[2].simulate('change', {target: {value: debitAmount}});

		const creditAccount = 'credit account';
		const creditAccountInput = wrapper.find('input')[3].simulate('change', {target: {value: creditAccount}});

		const creditAmount = 20;
		const creditAmountInput = wrapper.find('input')[4].simulate('change', {target: {value: creditAmount}});

		console.log('state', wrapper.state());
		*/
	});

});