import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'consumption',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
