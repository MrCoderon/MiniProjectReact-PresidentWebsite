var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname,'public');
var APP_DIR = path.resolve(__dirname,'src');

var config = {
   devtool: 'inline-source-map',
   entry: [
      'webpack-dev-server/client?http://127.0.0.1:8080',
      'webpack/hot/only-dev-server',
      './src/index.js'
   ],
   output: {
      path: path.join(__dirname, 'public/assets/js'),
      filename: 'qraynix.bundle.js',
      publicPath: '/'
   },
   resolve: {
      modulesDirectories: [
         'node_modules', 
         'src'
      ],
      extensions: ['', '.js', '.jsx']
   },
   devServer: {
      inline: true,
      port: 8080
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            include: APP_DIR,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
         },
         {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
         }
      ]
   },
   plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()  
   ]
};

module.exports = config;
