import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'financials',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
