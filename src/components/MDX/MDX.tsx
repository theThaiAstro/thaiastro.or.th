import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';

import Video from '../Video/Video';

interface Props {
	children: string & React.ReactNode;
	withRenderer?: boolean;
}

const shortcodes = { Video };

const MDX: React.FC<Props> = ({ children, withRenderer }) =>
	withRenderer ? (
		<MDXProvider components={shortcodes}>
			<MDXRenderer>{children}</MDXRenderer>
		</MDXProvider>
	) : (
		<MDXProvider components={shortcodes}>{children}</MDXProvider>
	);

export default MDX;
