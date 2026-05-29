/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "night-club-api-2026-u759.onrender.com",
      },
    ],
  },
};

export default nextConfig;
