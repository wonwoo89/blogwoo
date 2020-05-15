module.exports = {
  devServer: {
    host: 'local.blogwoo.xyz',
    port: 1024,
  },
  pwa: {
    name: 'Blogwoo',
    themeColor: '#FFF',
    msTileColor: '#FFF',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'white',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'sw.js',
    },
  },
};
