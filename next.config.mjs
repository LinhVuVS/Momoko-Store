/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "res.cloudinary.com",
            },
        ],
    },

    async rewrites() {
        return [
            {
                source: "/api/:path*", // Đường dẫn proxy trên client
                destination: "http://localhost:3000/api/:path*", // Proxy đến server API
            },
        ];
    },
};

export default nextConfig;
