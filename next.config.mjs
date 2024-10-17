import withBundleAnalyzer from '@next/bundle-analyzer';
import { withSentryConfig } from '@sentry/nextjs';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

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
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  webpack(config, { dev, isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    if (process.env.ANALYZE === 'true') {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: isServer
            ? '../analyze/server.html'
            : './analyze/client.html',
          openAnalyzer: false,
          generateStatsFile: true,
          statsFilename: isServer
            ? '../analyze/stats-server.json'
            : './analyze/stats-client.json',
        }),
      );
    }

    // 각 페이지별 번들 분석 설정
    if (process.env.ANALYZE === 'true' && !isServer) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: './analyze/[name].html',
          openAnalyzer: false,
          generateStatsFile: true,
          statsFilename: './analyze/stats-[name].json',
        }),
      );
    }
    return config;
  },
};

const configWithBundleAnalyzer = bundleAnalyzer(nextConfig);

export default withSentryConfig(configWithBundleAnalyzer, {
  org: 'codeit-2',
  project: 'relax-together',
  silent: !process.env.CI,
  hideSourceMaps: true,
  disableLogger: true,
});
