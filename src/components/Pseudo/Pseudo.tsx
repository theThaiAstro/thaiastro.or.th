import React from 'react';
import cx from 'classnames';

export const SocialColours: React.FC = () => (
	<div
		className={cx(
			'hidden h-0 w-0',
			'text-brand-Facebook',
			'text-brand-Line',
			'text-brand-Messenger',
			'text-brand-Twitter',
			'text-brand-WhatsApp',
			'text-brand-Link',
			'text-brand-Messenger--Gradient',
			'hover:bg-brand-Facebook',
			'hover:bg-brand-Line',
			'hover:bg-brand-Messenger',
			'hover:bg-brand-Twitter',
			'hover:bg-brand-Link',
			'hover:bg-brand-WhatsApp',
			'hover:bg-brand-Messenger--Gradient'
		)}
	></div>
);
