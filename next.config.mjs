/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "night-club-api-2026-u759.onrender.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
