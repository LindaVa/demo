const {injectBabelPlugin} = require('react-app-rewired');
const rewireCssModules = require('react-app-rewire-css-modules');
module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', {libraryName: 'antd-mobile', libraryDirectory: 'es', style: 'css'}], config);
    config = rewireCssModules(config, env);
    return config;
};