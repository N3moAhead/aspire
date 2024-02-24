import CopyPlugin from 'copy-webpack-plugin';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Dotenv = require('dotenv-webpack');

export const plugins = [
  new CopyPlugin({
    patterns: [{ from: './node_modules/.prisma/client' }],
  }),
  new Dotenv(),
];
