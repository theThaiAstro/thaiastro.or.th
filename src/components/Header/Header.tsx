import React from 'react';
import NavigationBar, { NavigationBarProps } from './NavigationBar/NavigationBar';

import * as styles from './Header.module.scss';

type Props = NavigationBarProps;

const Header: React.FC<Props> = ({ noDefaultMargin }) => (
	<header id={styles.SiteHeader}>
		<NavigationBar noDefaultMargin={noDefaultMargin} />
	</header>
);

export default Header;
