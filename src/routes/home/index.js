import React from 'react';
import Home from './Home';

import  { setInitialState } from '../../actions/ledger';

export default {

	path: '/',

	async action({context: { store }}) {
		const initialAmount = store.getState().getIn(['ledger', 'balance'], null);

		if (!initialAmount) {
			await store.dispatch(setInitialState());
		}

		return <Home />;
	}

};
