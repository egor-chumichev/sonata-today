import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    prependData: `
      @use "@/styles/globals.scss";
      @use "@/styles/variables.scss";
      @use "@/styles/mixins.scss";
    `,
  },
};

export default nextConfig;
