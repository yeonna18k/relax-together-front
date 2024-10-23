import { withSentryConfig } from '@sentry/nextjs';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/gatherings',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://dev.relax-together.shop/api/:path*',
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '/v0/b/relax-together.appspot.com/o/**',
      },
      {
        protocol: 'https',
        hostname: 'wfftvdtsykljejnuzibc.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  webpack(config, { dev, isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default withSentryConfig(nextConfig, {
  org: 'codeit-2',
  project: 'relax-together',
  silent: !process.env.CI,
  hideSourceMaps: true,
  disableLogger: true,
});
