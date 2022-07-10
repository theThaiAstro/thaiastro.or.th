import NextLink from 'next/link';
import React from 'react';

type LinkProps = { link: string; classNames?: string; children: React.ReactNode; href?: string; onClick?: () => void };
const Link = (props: LinkProps, displayName: string) => {
	const Component = React.forwardRef<HTMLAnchorElement, LinkProps>((p, ref) => (
		<a className={props.classNames} href={p.href} onClick={p.onClick} ref={ref}>
			{p.children}
		</a>
	));
	Component.displayName = `Anchored(${displayName})`;

	return (
		<NextLink href={props.link} passHref>
			<Component {...props} />
		</NextLink>
	);
};

export default Link;
