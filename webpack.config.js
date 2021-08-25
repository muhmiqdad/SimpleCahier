const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve('build'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['tailwindcss', 'autoprefixer', ]
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    fallback: { path: false, buffer: require.resolve('buffer'), },
    },
  devServer: {
    contentBase: './build',
    port: 8081,
    disableHostCheck: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, 'build', 'index.html'),
    }),
  ],
};
