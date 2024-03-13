/** @type {import('next').NextConfig} */
const nextConfig = {
	// output: 'export',
	basePath: '',
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'picsum.photos',
			},
			{
				protocol: 'http',
				hostname: 'kwp.local',
			},
			{
				protocol: 'http',
				hostname: 'dashboard.kathymeng.fun',
			},
			
		],
	},
}

module.exports = nextConfig;
