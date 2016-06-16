import React, {PropTypes} from 'react';

import Ledger from '../../components/Ledger/Ledger';
import Balance from '../../components/Ledger/Balance';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../styles/home.css';

const title = 'Book Ledger';

function Home({news}, context) {
	context.setTitle(title);
	return (
		<div className={s.root}>
			<div className={s.container}>
				<Balance amount={1002} />
				<Ledger />
			</div>
		</div>
	);
}

Home.propTypes = {
	news: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string.isRequired,
		link: PropTypes.string.isRequired,
		contentSnippet: PropTypes.string,
	})).isRequired
};
Home.contextTypes = {setTitle: PropTypes.func.isRequired};

export default withStyles(s)(Home);
