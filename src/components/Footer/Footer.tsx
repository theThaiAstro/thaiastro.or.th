import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import './Footer.scss';

const LogoPath = '../../assets/images/padded-logo.png';

const Footer: React.FC = () => {
	const FooterLogo = () => (
		<div id="FooterBrand">
			<div id="FooterLogoContainer">
				<StaticImage
					alt="สมาคมดาราศาสตร์ไทย"
					layout="fullWidth"
					quality={100}
					loading="eager"
					placeholder="blurred"
					src={LogoPath}
				/>
			</div>
			<div id="FooterBrandName">
				<div id="FooterBrandName--TH">สมาคมดาราศาสตร์ไทย</div>
				<div id="FooterBrandName--EN">The Thai Astronomical Society</div>
			</div>
		</div>
	);

	const Copyright = () => (
		<div id="FooterCopyright">
			<div id="FooterCopyright__Text">©&nbsp;{new Date().getFullYear() + 543} สมาคมดาราศาสตร์ไทย</div>
			<div id="FooterCopyright__Notice">
				เนื้อหาทั้งหมดเป็นลิขสิทธิ์ของสมาคมดาราศาสตร์ไทย
				<wbr />
				ยกเว้นมีการระบุไว้เป็นอย่างอื่น โปรดดูหน้าลิขสิทธิ์สำหรับการนำไปใช้งาน
			</div>
		</div>
	);

	return (
		<footer id="Footer">
			<div id="FooterJustifier">
				<FooterLogo />
				<Copyright />
			</div>
		</footer>
	);
};

export default Footer;
