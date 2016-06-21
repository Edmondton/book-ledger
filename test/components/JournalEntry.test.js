import React from 'react';
import { findDOMNode } from 'react-dom';
import { renderIntoDocument,
	Simulate,
	scryRenderedDOMComponentsWithTag,
	findRenderedDOMComponentWithTag
} from 'react-addons-test-utils';
import JournalEntry from '../../src/components/Ledger/JournalEntry';
import App from '../../src/components/App/App';

import jsdom from 'jsdom'
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

const SLICE = Array.prototype.slice;

describe('JournalEntry', () => {
	let wrapper = null;
	let dom = null;

	beforeEach(() => {
		wrapper = renderIntoDocument(
			<App context={{ insertCss: () => {} }}>
				<JournalEntry addJournalEntry={Function.prototype} />
			</App>
		);

		dom = () => findDOMNode(wrapper);
	});

	it('should render correctly for adding a new entry', () => {
		let inputs = scryRenderedDOMComponentsWithTag(wrapper, 'input');

		inputs[1].value = 'account';
		inputs[2].value = 20;
		inputs[3].value = 'credit';
		inputs[4].value = 10;

		Simulate.change(inputs[1]);
		Simulate.change(inputs[2]);
		Simulate.change(inputs[3]);
		Simulate.change(inputs[4]);
		Simulate.blur(inputs[4]);

		let balance = scryRenderedDOMComponentsWithTag(wrapper, 'span');
		let items = SLICE.call(balance).map(data => {
			return data.textContent;
		});

		expect(inputs.length).to.equal(7);
		expect(items).to.deep.equal(['Book Ledger', '10.00', '10.00']);
	});
});