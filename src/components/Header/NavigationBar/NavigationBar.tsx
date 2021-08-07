import React from 'react';
import cx from 'classnames';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './NavigationBar.module.scss';
import { useEffect } from 'react';

const LogoPath = '../../../assets/images/padded-logo.png';

export interface NavigationBarProps {
	noDefaultMargin?: boolean;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ noDefaultMargin }) => {
	const leftAlign = document.querySelector('main > article')?.getBoundingClientRect();

	return (
		<nav id={styles.NavigationBar} className={cx(noDefaultMargin && styles.NoDefaultMargin)}>
			<div id={styles.LogoJustifier}>
				<Link to="/">
					<div id={styles.NavigationBarLogoContainer} style={{ left: `${leftAlign}px` ?? 'var(--XXXXXXXL)' }}>
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
			</div>
		</nav>
	);
};

export default NavigationBar;
