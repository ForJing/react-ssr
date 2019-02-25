module.exports = {
  presets: [
    '@babel/react',
    [
      '@babel/env',
      {
        targets: {
          browsers: ['last 2 version'],
        },
      },
    ],
  ],
}
