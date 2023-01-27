const path = require('path')

const { alias, configPaths } = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias(configPaths())(config)

  return config
}

// {
//   '@': path.resolve(__dirname, 'src'),
//   '@components': path.resolve(__dirname, 'src/components'),
//   '@hooks': path.resolve(__dirname, 'src/hooks'),
//   '@constants': path.resolve(__dirname, 'src/constants'),
//   '@font': path.resolve(__dirname, 'src/font'),
//   '@global-type': path.resolve(__dirname, 'src/global-type'),
//   '@helpers': path.resolve(__dirname, 'src/helpers'),
//   '@hoc': path.resolve(__dirname, 'src/hoc'),
//   '@icons': path.resolve(__dirname, 'src/icons'),
//   '@img': path.resolve(__dirname, 'src/img'),
//   '@pages': path.resolve(__dirname, 'src/pages'),
//   '@privacy': path.resolve(__dirname, 'src/privacy'),
//   '@routes': path.resolve(__dirname, 'src/routes'),
//   '@services': path.resolve(__dirname, 'src/services'),
//   '@store': path.resolve(__dirname, 'src/store'),
//   '@types': path.resolve(__dirname, 'src/types'),
//   '@utils': path.resolve(__dirname, 'src/utils'),
// }
