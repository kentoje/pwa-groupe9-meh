module.exports = {
  pwa: {
    name: 'PWA-GROUPE-9',
    themeColor: '#C4D0E5',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      display: 'fullscreen',
    },
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
    },
    iconPaths: {
      favicon32: 'img/icons/icon-32x32.png',
      favicon16: 'img/icons/icon-16x16.png',
      appleTouchIcon: 'img/icons/icon-152x152.png',
      msTileImage: 'img/icons/icon-144x144.png',
    },
  },
};
