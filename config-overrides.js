const rewireLess = require('react-app-rewire-less');
// const rewireLess = require("react-app-rewire-less-modules");
/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireLess(config, env);
  // with loaderOptions
  // config = rewireLess.withLoaderOptions(someLoaderOptions)(config, env);
  return config;
}