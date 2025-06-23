import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https" as const,
        hostname: 'my-page-negiupp.s3.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: "https" as const,
        hostname: 'pandorai.s3.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: "https" as const,
        hostname: 'pandorai.ch',
        pathname: '/**',
      },
      {
        protocol: "https" as const,
        hostname: 'negiupp.com',
        pathname: '/**',
      },
  
      
      {
        protocol: "https" as const,
        hostname: 'img.daisyui.com',
        pathname: '/**',
      },
    ],
  },
};

export default withNextIntl(nextConfig);