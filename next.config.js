/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async headers() {
        return [
            {
                key: 'X-Frame-Options',
                value: 'ALLOW-FROM https://twitch.tv'
            }
        ]
    }
}

module.exports = nextConfig
