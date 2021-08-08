import React from 'react';

import * as styles from './Header.module.scss';
import NavigationBar, { NavigationBarProps } from './NavigationBar/NavigationBar';

type Props = NavigationBarProps;

const Header: React.FC<Props> = ({ noDefaultMargin }) => (
	<header id={styles.SiteHeader}>
		<NavigationBar noDefaultMargin={noDefaultMargin} />
	</header>
);

export default Header;
