const presets = [
  [
    '@babel/preset-env',
    {
      useBuiltIns: 'usage',
      corejs: 3,
      debug: true,
    },
  ],
  '@babel/preset-react',
];
const plugins = [
  '@babel/plugin-transform-regenerator',
  '@babel/plugin-transform-runtime',
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-transform-destructuring',
];

module.exports = { presets, plugins };
