import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const Nav = dynamic(() => import('@components/Nav/Nav'));
const Footer = dynamic(() => import('@components/Footer/Footer'));

type Props = {
	title: string;
	withNav?: boolean;
	children: React.ReactNode;
	mainProps?: JSX.IntrinsicElements['main'];
};

const GlobalLayout: React.FC<Props> = (props: Props) => (
	<>
		<Head>
			<title>{props.title}</title>
			<meta name="description" content="สมาคมดาราศาสตร์ไทย" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		{/* {(props.withNav ?? true) && <Nav />} */}

		<main {...props.mainProps}>{props.children}</main>

		<Footer />
	</>
);

export default GlobalLayout;
