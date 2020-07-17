# Production vs Development Builds

- Prod: Fast and small
- Dev: As much info as possible
- Tenser is not needed for both prod and dev
- CssExtract is only for prod
```
modules.exports = {
  ...
  mode: "development" // 'development', 'production' or 'none'
}
```

## Dev server
```
module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    index: 'index.html',
    port: 9000
  },
}
```
### run dev server
- in package.json
`"dev": "webpack-dev-server --config webpack.dev.config.js --hot"`