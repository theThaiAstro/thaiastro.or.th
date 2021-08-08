import React from 'react';

import Header from '../../components/Header/Header';
import { NavigationBarProps } from '../../components/Header/NavigationBar/NavigationBar';

type Props = NavigationBarProps;

// TODO:
const GlobalLayout: React.FC<Props> = ({ noDefaultMargin, children }) => (
	<>
		<Header noDefaultMargin={noDefaultMargin} />
		{children}
	</>
);

export default GlobalLayout;
