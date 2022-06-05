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

		<div className="fixed top-0 left-0 z-50 flex h-16 w-16 items-center justify-center bg-red-500 text-2xl sm:bg-pink-500 md:bg-blue-500 lg:bg-purple-500 xl:bg-green-500">
			🐞
		</div>

		{(props.withNav ?? true) && <Nav />}

		<main {...props.mainProps}>{props.children}</main>

		<Footer />
	</>
);

export default GlobalLayout;
