exports.config = {
  prerenderIndex: null,
  bundles: [
    { components: ['my-app', 'app-home'] },
    { components: ['app-show', 'app-search'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};

