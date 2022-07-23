import type { NextPage } from 'next';

import Index from '@components/pages/Index/Index';
import GlobalLayout from '@layouts/GlobalLayout';

const Home: NextPage = () => {
	return (
		<GlobalLayout title="สมาคมดาราศาสตร์ไทย - The Thai Astronomical Society" withoutAutoSuffix={true}>
			<Index />
		</GlobalLayout>
	);
};

export default Home;
