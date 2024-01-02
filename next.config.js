/** @type {import('next').NextConfig} */
const nextConfig = {
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
		],
	},
}

module.exports = nextConfig;
