const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "example/src/index.html"),
    filename: "./index.html"
});
module.exports = [
    {
        entry: path.join(__dirname, "example/src/index.jsx"),
        output: {
            path: path.join(__dirname, "demo_dist"),
            filename: "bundle.js"
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env'
                            ],
                            plugins: [
                                'transform-class-properties'
                            ]
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                },
                {
                    test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                },
                {
                    test: /\.(html)$/,
                    use: {
                        loader: 'html-loader',
                        options: {
                            attrs: [':data-src']
                        }
                    }
                }
            ]
        },
        plugins: [htmlWebpackPlugin],
        resolve: {
            extensions: [".js", ".jsx"]
        },
        devServer: {
            port: 3001
        }
    },
];
