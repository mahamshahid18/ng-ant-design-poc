const AntdScssThemePlugin = require('antd-scss-theme-plugin');

module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.ts?$/,
        options: {
          plugins: [
            ['import', { 
              "libraryName": "antd",
              "libraryDirectory": "lib",
              "style": true
            }],
            new AntdScssThemePlugin('./styles.scss')
          ]
        },
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          AntdScssThemePlugin.themify({ 
            loader: "less-loader",
            options: {
              javascriptEnabled: true
            }
          })
        ]
      },
      {
        test: /\.scss$/,
        use: AntdScssThemePlugin.themify({
          loader: 'sass-loader',
          options: {
            sassOptions: {
              indentedSyntax: true,
              includePaths: ['./styles.scss']
            }
          }
        })
        // issuer: {
        //   exclude: /\.less$/,
        // },
      },
      // {
      //   test: /\.scss$/,
      //   issuer: /\.less$/,
      //   use: {
      //     loader: './sass-to-less.js'
      //   }
      // }
    ]
  }