import React from 'react';
import Header from '../../components/Header/Header';

const GlobalLayout: React.FC = ({ children }) => (
	<>
		<Header />
		{children}
	</>
);

export default GlobalLayout;
