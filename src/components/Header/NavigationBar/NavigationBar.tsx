import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './NavigationBar.module.scss';

const LogoPath = '../../../assets/images/padded-logo.png';

const NavigationBar = () => (
	<nav id={styles.NavigationBar}>
		<Link to="/">
			<div id={styles.NavigationBarLogoContainer}>
				<StaticImage
					alt="สมาคมดาราศาสตร์ไทย"
					height={128}
					layout="constrained"
					quality={100}
					loading="eager"
					placeholder="tracedSVG"
					src={LogoPath}
				/>
			</div>
		</Link>
	</nav>
);

export default NavigationBar;
