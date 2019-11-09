# webpack-learning
A project of webpack learning

### Babel 配置以兼容旧浏览器

在 .babelrc 中配置

```
{
  "presets": ["@babel/env"],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "helpers": false,
        "regenerator": true,
      }
    ]
  ]
}

```

在 webpack 中配置

```
{
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: [
        [
          '@babel/preset-env',
          {
            // useBuiltIns polyfill 设置 使用内建？
            // 将 polyfill 应用于 @babel/preset-env 中的方法
            'useBuiltIns': 'entry', //"usage" | "entry" | false, defaults to false.
            // 'corejs': 3 // 使用 core-js 不能缺少的配置
            }
          ]
        ],
      plugins: ['@babel/plugin-transform-runtime']
    }
  }
},
```