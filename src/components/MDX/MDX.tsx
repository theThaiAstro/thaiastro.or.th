import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

interface Props {
	children: string & React.ReactNode;
	withRenderer?: boolean;
}

const shortcodes = {};

const MDX: React.FC<Props> = ({ children, withRenderer }) =>
	withRenderer ? (
		<MDXProvider components={shortcodes}>
			<MDXRenderer>{children}</MDXRenderer>
		</MDXProvider>
	) : (
		<MDXProvider components={shortcodes}>{children}</MDXProvider>
	);

export default MDX;
