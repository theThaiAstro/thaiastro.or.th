import React from 'react';
import cx from 'classnames';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './NavigationBar.module.scss';

const LogoPath = '../../../assets/images/padded-logo.png';

export interface NavigationBarProps {
	noDefaultMargin?: boolean;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ noDefaultMargin }) => (
	<nav id={styles.NavigationBar} className={cx(noDefaultMargin && styles.NoDefaultMargin)}>
		<Link to="/">
			<div id={styles.NavigationBarLogoContainer}>
				<StaticImage
					alt="สมาคมดาราศาสตร์ไทย"
					layout="fullWidth"
					quality={100}
					loading="eager"
					placeholder="blurred"
					src={LogoPath}
				/>
			</div>
		</Link>
	</nav>
);

export default NavigationBar;
