import type { NextPage } from 'next';

import Index from '@components/pages/Index/Index';
import GlobalLayout from '@layouts/GlobalLayout';

const Home: NextPage = () => {
	return (
		<GlobalLayout title="Index">
			<Index />
		</GlobalLayout>
	);
};

export default Home;
