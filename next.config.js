/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['placekitten.com'],
		loader: 'custom',
	},
	reactStrictMode: true,
};

module.exports = nextConfig;
