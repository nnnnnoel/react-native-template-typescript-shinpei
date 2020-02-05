module.exports = api => {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'babel-plugin-root-import',
        {
          paths: [
            {
              rootPathSuffix: './src/api',
              rootPathPrefix: '@api/',
            },
            {
              rootPathSuffix: './src/components',
              rootPathPrefix: '@components/',
            },
            {
              rootPathSuffix: './src/constants',
              rootPathPrefix: '@constants/',
            },
            {
              rootPathSuffix: './src/context',
              rootPathPrefix: '@context/'
            },
            {
              rootPathSuffix: './src/nav',
              rootPathPrefix: '@nav/',
            },
            {
              rootPathSuffix: './src/screens',
              rootPathPrefix: '@screens/',
            },
            {
              rootPathSuffix: './src/utils',
              rootPathPrefix: '@utils/',
            },
            {
              rootPathSuffix: './assets',
              rootPathPrefix: '@assets/',
            },
            {
              rootPathSuffix: '.',
              rootPathPrefix: '/',
            },
          ],
        },
      ],
    ],
  };
};
