import React from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreativeCommons, faCreativeCommonsBy, faCreativeCommonsSa } from '@fortawesome/free-brands-svg-icons';

import Markdown from '@components/Markdown/Markdown';
import { GenericBlock } from '@constants/classNames';

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={cx('mt-24 bg-slate-900')}>
			<div className={cx(GenericBlock, 'pt-24 pb-32')}>
				<h2 className="font-['IBM_Plex_Sans_Thai'] text-2xl font-semibold text-slate-100">สมาคมดาราศาสตร์ไทย</h2>

				<div className="mt-2 flex items-center text-slate-200">
					{/* <a href={socialLinkedIn} aria-label="LinkedIn" className={styles.SocialButton}>
						<FontAwesomeIcon icon={faLinkedinIn} className="h-6" />
					</a>
					<a href={socialTwitter} aria-label="Twitter" className={styles.SocialButton}>
						<FontAwesomeIcon icon={faTwitter} className="h-6" />
					</a>
					<a href={socialGitHub} aria-label="GitHub" className={styles.SocialButton}>
						<FontAwesomeIcon icon={faGithub} className="h-6" />
					</a>
					<a href={socialInstagram} aria-label="Instagram" className={styles.SocialButton}>
						<FontAwesomeIcon icon={faInstagram} className="h-6" />
					</a>
					<a href={socialMedium} aria-label="Medium" className={styles.SocialButton}>
						<FontAwesomeIcon icon={faMediumM} className="h-6" />
					</a> */}
				</div>
			</div>

			<div id="licence" className="font-text mt-12 tracking-tight text-slate-400">
				<div className="mt-2 flex">
					<FontAwesomeIcon icon={faCreativeCommons} className="mr-2 h-6" />
					<FontAwesomeIcon icon={faCreativeCommonsBy} className="mr-2 h-6" />
					<FontAwesomeIcon icon={faCreativeCommonsSa} className="mr-2 h-6" />
				</div>
				<div className="mt-2">
					<Markdown content={`©&nbsp;${currentYear} Thammarith Likittheerameth`} />
					<Markdown content={`Licensed under the [Creative Commons Attribution-ShareAlike 4.0 International Licence](https://example.com)`} />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
