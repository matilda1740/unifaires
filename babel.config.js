module.exports = function(api) {
  api.cache(true);

  const presets = ['next/babel'];
  const plugins = [
    ['styled-components'],
    [require('@babel/plugin-proposal-decorators').default,
   {legacy: true}]
  ];

  return {
    presets,
    plugins,
  };
};
