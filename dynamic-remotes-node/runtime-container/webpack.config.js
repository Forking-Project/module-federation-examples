const { UniversalFederationPlugin } = require('@module-federation/node');
module.exports = {
  entry: './index.js',
  mode: 'development',
  target: false,
  output: {
    library: { type: 'commonjs-module' },
  },
  optimization: {
    runtimeChunk: 'single',
  },
  plugins: [
    new UniversalFederationPlugin({
      remoteType: 'script',
      isServer: true,
      name: 'app2',
      useRuntimePlugin: true,
      library: { type: 'commonjs-module' },
      filename: 'remoteEntry.js',
      exposes: {
        './sample': './expose-sample.js',
      },
    }),
  ],
};
