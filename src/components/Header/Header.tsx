import React from 'react';
import NavigationBar from './NavigationBar/NavigationBar';

import * as styles from './Header.module.scss';

const Header = () => (
	<header id={styles.SiteHeader}>
		<NavigationBar />
	</header>
);

export default Header;
