

import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
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
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);