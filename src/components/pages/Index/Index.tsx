import React from 'react';

import { GenericBlock } from '@constants/classNames';
import directus from '@lib/directus';

const Index: React.FC = () => {
	console.log(directus)	

	return (
		<>
			<section className={GenericBlock}>This is the hero section</section>
		</>
	);
};

export default Index;
