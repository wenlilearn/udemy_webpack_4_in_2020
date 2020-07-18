# Multi Page Application

## Multiple bundles
- In webpack.config.js:
```
// Specify any bundles
entry: {
  'hello-world': './src/hello-world.js',
  'pig': './src/pig.js'
},
// [name] is the bundle name
output: {
  filename: '[name].[contenthash].js',
  ...
},
```
- This will split the Js and CSS into multiple bundles

## Generate multiple HTML files
- In webpack.config.js:
```
  new HtmlWebpackPlugin({
    title: "title",
    // Must be unique and preferably same as entry name
    filename: 'pig.html',
    // `chunk` specifies which chunk/entry bundle to use
    // Matching the entry's key
    chunks: ['pig'],
    description: "description",
    template: "./src/template.hbs"
  })
```

## Extract commonly shared js libraries
- In webpack.config.js:
```
optimization: {
  splitChunks: {
    chunks: "all",
    // Set minimize size to extract to vendor, default to 30000(30KB)
    minSize: 10000,
    automaticNameDelimiter: '_'
  }
},
```
- Will also need to add this chunk to `HtmlWebpackPlugin`
- By default, only import that's >= 30KB will be extracted. If you wanted to extract anything lower than that, we can lower the limit by set minSize.