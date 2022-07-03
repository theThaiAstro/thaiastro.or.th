import React from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreativeCommons, faCreativeCommonsBy, faCreativeCommonsSa } from '@fortawesome/free-brands-svg-icons';

import TasLogo from '@assets/logos/tas-logo-padded.png';
import Image from '@components/Image/Image';
import Markdown from '@components/Markdown/Markdown';
import { GenericBlock } from '@constants/classNames';

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear() + 543;

	return (
		<footer className={cx('mt-24 pt-24 pb-32', 'bg-tas-700', "font-display")}>
			<div className={cx(GenericBlock, 'max-w-[113ch]')}>
				<div className="relative -ml-3 h-24 w-24">
					<Image src={TasLogo} alt="TAS Logo" className="w-full" layout="fill" objectFit="contain" />
				</div>

				{/* prettier-ignore */}
				<h2 className={cx('mt-4', "text-2xl font-semibold text-slate-100")}>
					สมาคมดาราศาสตร์ไทย
				</h2>
				{/* prettier-ignore */}
				<h3 className={cx('mt-0', "text-lg font-medium text-slate-100")}>
					The Thai Astronomical Society
				</h3>

				{/* <div className="mt-2 flex items-center text-slate-200"> */}
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
				{/* </div> */}
			</div>

			{/* <div  className="font-text mt-12 tracking-tight text-slate-400"> */}
			<div id="licence" className={cx(GenericBlock, 'mt-2 max-w-[113ch]')}>
				{/* <div className="mt-2 flex">
					<FontAwesomeIcon icon={faCreativeCommons} className="mr-2 h-6" />
					<FontAwesomeIcon icon={faCreativeCommonsBy} className="mr-2 h-6" />
					<FontAwesomeIcon icon={faCreativeCommonsSa} className="mr-2 h-6" />
				</div> */}
				<div className="text-slate-300">
					<Markdown className="font-semibold" content={`©&nbsp;${currentYear} สมาคมดาราศาสตร์ไทย`} />
					<Markdown
						className="text-sm"
						content={`เนื้อหาทั้งหมดเป็นลิขสิทธิ์ของสมาคมดาราศาสตร์ไทยยกเว้นมีการระบุไว้เป็นอย่างอื่น โปรดดูหน้าลิขสิทธิ์สำหรับการนำไปใช้งาน`}
					/>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
