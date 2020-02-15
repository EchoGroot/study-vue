//path 模块提供了一些用于处理文件路径的小工具，我们可以通过以下方式引入该模块：
const path = require('path')
//导入自动生成html文件到内存的插件
var htmlWebpackPlugin = require('html-webpack-plugin')
var vueLoaderPlugin=require('vue-loader/lib/plugin')

module.exports = {
  //dirname作用：动态获取当前文件夹的绝对路径
  //filename作用：动态获取当前文件的绝对路径
  entry: path.join(__dirname, './src/main.js'),
  output: {
    path: path.join(__filename, './dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new htmlWebpackPlugin({
      //模板路径
      template: path.resolve(__dirname, 'src/index.html'),
      //生成的文件名称
      filename: 'index.html'
    }),
    new vueLoaderPlugin()
  ],
  //配置第三方loader模块
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|jpg|gif)$/, use: 'url-loader?limit=50000&name=[hash:8]-[name].[ext]' },
      // limit 给定的值，是图片的大小，单位是 byte， 如果我们引用的 图片，大于或等于给定的 limit值，则不会被转为base64格式的字符串， 如果 图片小于给定的 limit 值，则会被转为 base64的字符串
      {test: /\.js$/,use:'babel-loader',exclude:/node_modules/},
      {test: /\.vue$/,use:'vue-loader'},
    ]
  },
  resolve:{
    alias:{
      "vue$":"vue/dist/vue.js"
    }
  }
}