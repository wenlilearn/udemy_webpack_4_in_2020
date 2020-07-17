Webpack Loaders:
- Help bundle various deps into the project
- sass loader:
npm i sass node-sass sass-loader -D

- Babel loader:
npm i @babel/core babel-loader @babel/preset-env babel-plugin-transform-class-properties -D

```
module: {
  rules: [
    {
      test: /\.(png|jpg)$/,
      use: [
        'file-loader'
      ]
    },
    {
      test: /\.(scss)$/,
      use: [
        'style-loader', 'css-loader', 'sass-loader' // Execution from right to left
      ]
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [ '@babel/env' ],
          plugins: { 'transform-class-properties' }
        }
      }
    }
  ]
}
```