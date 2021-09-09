import cx from 'classnames';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Logo from '../../../assets/images/padded-logo.png';

import * as styles from './NavigationBar.module.scss';

export interface NavigationBarProps {
	noDefaultMargin?: boolean;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ noDefaultMargin }) => {
	return (
		<nav id={styles.NavigationBar} className={cx(noDefaultMargin && styles.NoDefaultMargin)}>
			<div id={styles.LogoJustifier}>
				<Link to="/" className={styles.NavigationBarHomeLink}>
					<div id={styles.NavigationBarLogoContainer}>
						<img src={Logo} alt="สมาคมดาราศาสตร์ไทย" />
					</div>
				</Link>
			</div>
		</nav>
	);
};

export default NavigationBar;
