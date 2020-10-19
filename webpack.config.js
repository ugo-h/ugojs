const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/assets/scripts/'
    },
    devServer:{
        port: 9000,
        contentBase: 'dist'
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader','css-loader'],
          },
        ],
    },
    
}