import React from 'react';
import cx from 'classnames';
import Link from 'next/link';

import Logo from '@assets/logos/tas-logo-padded.png';
import Image from '@components/Image/Image';
import { GenericBlock } from '@constants/classNames';

const Nav: React.FC = () => {
	return (
		<nav className={cx('sticky top-0 z-10 h-16 bg-black')}>
			<div className={cx(GenericBlock, 'p-0 md:px-0 md:p-0 lg:px-0')}>
				<Link href="/">
					<div className="absolute cursor-pointer bg-[#001f8f] p-4">
						<div className="relative h-12 w-12">
							<Image src={Logo} alt="TAS Logo" className="w-full" layout="fill" objectFit="contain" />
						</div>
					</div>
				</Link>
			</div>
		</nav>
	);
};

export default Nav;
