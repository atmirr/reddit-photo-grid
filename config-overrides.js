const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    ['@components']: path.resolve(__dirname, './src/components'),
    ['@actions']: path.resolve(__dirname, './src/actions'),
    ['@reducers']: path.resolve(__dirname, './src/reducers'),
    ['@sagas']: path.resolve(__dirname, './src/sagas'),
    ['@api']: path.resolve(__dirname, './src/api'),
    ['@selectors']: path.resolve(__dirname, './src/selectors'),
    ['@constants']: path.resolve(__dirname, './src/constants'),
    ['@utils']: path.resolve(__dirname, './src/utils'),
    ['@assets']: path.resolve(__dirname, './src/assets'),
  }),
);
