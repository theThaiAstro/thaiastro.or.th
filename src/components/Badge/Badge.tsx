import cx from 'classnames';
import React from 'react';

type Props = {
	className?: string;
	text?: string;
};

const Badge: React.FC<Props> = ({ className, text }) => {
	if (!text) return null;

	return (
		<div className={cx('inline-flex items-center', 'h-8 px-4', 'bg-blue-500 text-gray-100', 'font-display text-base font-medium', className)}>{text}</div>
	);
};

export default Badge;
