require("@app/config");
const compose = require("lodash/flowRight");
const AntDDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const { ROOT_URL, T_AND_C_URL } = process.env;
if (!ROOT_URL) {
  if (process.argv[1].endsWith("/depcheck")) {
    /* NOOP */
  } else {
    throw new Error("ROOT_URL is a required envvar");
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
(function (process = null) {
  // You *must not* use `process.env` in here, because we need to check we have
  // those variables. To enforce this, we've deliberately shadowed process.
  module.exports = () => {
    const withCss = require("@zeit/next-css");
    const withLess = require("@zeit/next-less");
    const lessToJS = require("less-vars-to-js");
    const fs = require("fs");
    const path = require("path");
    // Where your antd-custom.less file lives
    const themeVariables = lessToJS(
      fs.readFileSync(
        path.resolve(__dirname, "../assets/antd-custom.less"),
        "utf8"
      )
    );
    // fix: prevents error when .less files are required by node
    if (typeof require !== "undefined") {
      require.extensions[".less"] = () => { };
    }
    return compose(
      withCss,
      withLess
    )({
      poweredByHeader: false,
      distDir: `../.next`,
      exportTrailingSlash: true,
      lessLoaderOptions: {
        javascriptEnabled: true,
        modifyVars: themeVariables, // make your antd custom effective
      },
      webpack(config, { webpack, dev, isServer }) {
        if (dev) config.devtool = "eval-cheap-module-source-map";
        if (dev) config.watch = true;

        //     config.module.rules.push({
        //       test: /\.(ttf|eot|svg)$/,
        //       use: {
        //         loader: 'file-loader',
        //         options: {
        //           name: 'fonts/[hash].[ext]',
        //         },
        //       },
        //     });

        //     config.module.rules.push({
        //       test: /\.(woff|woff2)$/,
        //       use: {
        //         loader: 'url-loader',
        //         options: {
        //           name: 'fonts/[hash].[ext]',
        //           limit: 5000,
        //           mimetype: 'application/font-woff',
        //         },
        //       },
        //     });


        // config.module.rules.push({
        //   test: /\.graphqls$/,
        //   exclude: /node_modules/,
        //   use: [
        //     { loader: 'graphql-tag/loader' },
        //     { loader: 'graphql-let/schema/loader' },
        //   ]
        // });

        config.module.rules.push({
          test: /\.graphqls$/,
          exclude: /node_modules/,
          use: [
            { loader: 'graphql-tag/loader' },
            { loader: 'graphql-let/schema/loader' },
          ]
        });

        config.module.rules.push({
          test: /\.graphql$/,
          exclude: /node_modules/,
          use: [

             { loader: 'babel-loader', options: { presets: ['@babel/preset-typescript', '@babel/preset-react'] } },
            { loader: 'graphql-let/loader' },

          ]
        });

        // config.module.rules.push({
        //   test: /\.m?js$/,
        //   exclude: /(node_modules|bower_components)/,
        //   use: {
        //     loader: 'babel-loader',
        //     options: {
        //       presets: ['@babel/preset-env'],
        //       cacheDirectory: true
        //     }
        //   }
        // });

        // config.module.rules.push({
        //   test: /\.(j|t)sx?$/,
        //   exclude: /node_modules/,
        //   use: {
        //     loader: "babel-loader",
        //     options: {
        //       cacheDirectory: true,
        //       babelrc: true,
        //       presets: [
        //         [
        //           "@babel/preset-env",
        //           { targets: { browsers: "last 2 versions" } } // or whatever your project requires
        //         ],
        //         "@babel/preset-typescript",
        //         "@babel/preset-react"
        //       ],
        //       plugins: [
        //         // plugin-proposal-decorators is only needed if you're using experimental decorators in TypeScript
        //         //  ["@babel/plugin-proposal-decorators", { legacy: true }],
        //         ["@babel/plugin-proposal-class-properties", { loose: true }],
        //         "react-hot-loader/babel"
        //       ]
        //     }
        //   }
        // }
        // );



        const makeSafe = (externals) => {
          if (Array.isArray(externals)) {
            return externals.map((ext) => {
              if (typeof ext === "function") {
                return (context, request, callback) => {
                  if (/^@app\//.test(request)) {
                    callback();
                  } else {
                    return ext(context, request, callback);
                  }
                };
              } else {
                return ext;
              }
            });
          }
        };

        const externals =
          isServer && dev ? makeSafe(config.externals) : config.externals;

        return {
          ...config,
          plugins: [
            ...config.plugins,
            new webpack.DefinePlugin({
              "process.env.ROOT_URL": JSON.stringify(
                ROOT_URL || "http://localhost:5678"
              ),
              "process.env.T_AND_C_URL": JSON.stringify(T_AND_C_URL || null),
            }),
            new webpack.IgnorePlugin(
              // These modules are server-side only; we don't want webpack
              // attempting to bundle them into the client.
              /^(node-gyp-build|bufferutil|utf-8-validate)$/
            ),
            new AntDDayjsWebpackPlugin(),
          ],
          externals: [
            ...(externals || []),
            isServer ? { "pg-native": "pg/lib/client" } : null,
          ].filter((_) => _),
        };
      },
      optimization: {
        minimizer: [new UglifyJsPlugin({
          cache: true,
        })],
      },
    });
  };
})();
