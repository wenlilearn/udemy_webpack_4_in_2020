# Plugins

## Why?
- Additional JS library adds webpack itself
- Things other than loadin files
- Most plugins will use -D option

## Useful Plugins
### minimize bundle file size
- `npm install -D terser-webpack-plugin`
```
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
  ...
  plugins: [
    new TerserPlugin()
  ]
}
```

### Extract CSS into separate bundles
- `npm install -D mini-css-extract-plugin`
```
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  ...
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css"
    })
  ]
}
```

### Browser caching
- No npm packages needed
- Just need to add `[contenthash]` between filename and extension

### Clean dist folder
- `npm install -D clean-webpack-plugin`
```
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
  ...
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        // Clean the dist folder
        '**/*',
        // Clean build folder(Can be used for other folders as well)
        path.join(process.cwd(), 'build/**/*')
      ]
    })  ]
}
```

### Generate html file automatically(using template)
- `npm install -D html-webpack-plugin`
```
const HtmlWebpackPlugin = require('html-webpack-plugin)
module.exports = {
  ...
  plugins: [
    new HtmlWebpackPlugin({
      title: "Hello World",
      // filename: 'custom_filename.html',
      meta: {
        description: "Some description"
      },
      template: "./src/index.html"
    })
  ]
}