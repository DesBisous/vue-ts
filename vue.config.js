module.exports = {
  // Project deployment base 项目部署基地
  // By default we assume your app will be deployed at the root of a domain, 默认情况下，我们假设应用程序将部署在域的根上，
  // e.g. https://www.my-app.com/
  // If your app is deployed at a sub-path, you will need to specify that 如果应用程序部署在子路径上，则需要指定
  // sub-path here. For example, if your app is deployed at 子路径在这里。例如，如果应用程序部署在
  // https://www.foobar.com/my-app/
  // then change this to '/my-app/' 然后把这个变成‘/my-app/’。
  baseUrl: '/',

  // where to output built files 在哪里输出内置文件
  outputDir: 'dist',

  // where to put static assets (js/css/img/font/...) 静态资产放在何处
  assetsDir: 'src/assets',

  // whether to use eslint-loader for lint on save. 是否使用ESLLT装载机进行保存的时候检查。
  // valid values: true | false | 'error'
  // when set to 'error', lint errors will cause compilation to fail.
  lintOnSave: true,

  // use the full build with in-browser compiler? 在浏览器编译器中使用完整的构建？
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  runtimeCompiler: false,

  // babel-loader skips `node_modules` deps by default. babel-loader在默认情况下跳过`node_modules`
  // explicitly transpile a dependency with this option. 用这个选项显式配置。
  transpileDependencies: [/* string or regex */],

  // generate sourceMap for production build? 生产环境打包时生成源代码
  productionSourceMap: true,

  // tweak internal webpack configuration. 调整内部 webpack 配置。
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: () => {},
  configureWebpack: () => {},

  // CSS related options CSS相关选项
  css: {
    // extract CSS in components into a single CSS file (only in production) 将组件中的CSS提取到单个CSS文件中（仅在生产中）
    // can also be an object of options to pass to extract-text-webpack-plugin 也可以是传递给 extract-text-webpack-plugin
    extract: true,

    // enable CSS source maps? 关联source文件和压缩后的文件的。
    // 一般会对js，css文件做压缩处理，以节省带宽。但是压缩后很难调试。所以用这种sourceMap关联。一般网站上都会给出压缩文件对应的sourceMap 文件。
    sourceMap: false,

    // pass custom options to pre-processor loaders. e.g. to pass options to 将自定义选项传递给预处理器加载器。
    // sass-loader, use { sass: { ... } } 例如
    loaderOptions: {},

    // Enable CSS modules for all css / pre-processor files. 启用所有CSS /预处理器文件的CSS模块。
    // This option does not affect *.vue files.
    modules: false
  },

  // use thread-loader for babel & TS in production build 在生产中使用 Babel＆TS 的 thread-loader
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,

  // options for the PWA plugin. PWA插件的选项。
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},

  // configure webpack-dev-server behavior
  devServer: {
    open: process.platform === 'darwin',
    disableHostCheck: false,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8012',
        changeOrigin: true
      }
    }, // string | Object
    before: app => {}
  },

  // options for 3rd party plugins 第三方插件的选项
  pluginOptions: {
  }
}
