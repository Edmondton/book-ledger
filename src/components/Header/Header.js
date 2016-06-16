import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Navigation from '../Navigation';
import s from '../../styles/header.css';
import Link from '../Link';
import logoUrl from './logo-small.png';

function Header() {
	return (
		<div className={s.root}>
			<div className={s.container}>
				<Navigation className={s.nav} />
				<Link className={s.brand} to="/">
					<img src={logoUrl} width="38" height="38" alt="React"/>
					<span className={s.brandTxt}>Book Ledger</span>
				</Link>
			</div>
		</div>
	);
}

export default withStyles(s)(Header);
