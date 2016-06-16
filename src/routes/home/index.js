import React from 'react';
import Home from './Home';

import  { setInitialState } from '../../actions/ledger';

export default {

	path: '/',

	async action({context: { store }}) {
		const initialAmount = store.getState().getIn(['ledger', 'balance'], null);

		console.log('init amount', initialAmount);
		console.log('state: ', store.getState().toJS());

		if (!initialAmount) {
			console.log('calling dispatch init state');
			await store.dispatch(setInitialState());
		}

		return <Home />;
	}

};
