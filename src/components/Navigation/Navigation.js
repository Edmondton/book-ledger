import React, {PropTypes} from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../styles/navigation.css';
import Link from '../Link';

function Navigation({className}) {
	return (
		<div className={cx(s.root, className)} role="navigation">
			<Link className={s.link} to="/about">Acme Inc.</Link>
		</div>
	);
}

Navigation.propTypes = {
	className: PropTypes.string,
};

export default withStyles(s)(Navigation);
