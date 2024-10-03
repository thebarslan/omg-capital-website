/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Tüm hostları kabul etmek için bu yapıyı kullanıyoruz
      },
    ],
  },
};

export default withNextIntl(nextConfig);
