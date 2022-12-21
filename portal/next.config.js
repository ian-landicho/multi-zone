/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => {
    return [
      {
        source: "/portal",
        destination: "http://localhost:5000/portal",
      },
      {
        source: "/app1/:path*",
        destination: "http://localhost:5100/app1/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
