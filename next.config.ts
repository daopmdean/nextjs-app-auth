import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental' // Enable Partial Prerendering, allows you to adopt PPR for specific routes
  }
};

export default nextConfig;
