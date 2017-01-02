var 
    webpack             =   require('webpack'),
    path                =   require('path'),
    BUILD_DIR           =   path.resolve(__dirname,'src/public'),
    ExtractTextPlugin   =   require("extract-text-webpack-plugin"),
    APP_DIR             =   path.resolve(__dirname,'src');

var config = {
   devtool: 'inline-source-map',
   entry: [
      'webpack-dev-server/client?http://127.0.0.1:8080',
      'webpack/hot/only-dev-server',
      './src/index.js'
   ],
   output: {
      path: path.join(__dirname, 'src/public/js'),
      filename: 'qraynix.react.js',
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
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!sass-loader")
         }
      ]
   },
   plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new ExtractTextPlugin("../css/qraynix.react.css"),
   ]
};

module.exports = config;
