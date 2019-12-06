module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.ts?$/,
        options: {
          plugins: [
            ['import', { 
              "libraryName": "antd",
              "libraryDirectory": "lib"
            }],
          ]
        },
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { 
            loader: "less-loader",
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              indentedSyntax: true,
              includePaths: ['./styles.scss']
            }
          }
        },
        issuer: {
          exclude: /\.less$/,
        },
      },
      {
        test: /\.scss$/,
        issuer: /\.less$/,
        use: {
          loader: './sass-to-less.js'
        }
      }
    ]
  }