/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Tüm alan adlarına izin verir
      },
    ],
  },
};

export default nextConfig;
