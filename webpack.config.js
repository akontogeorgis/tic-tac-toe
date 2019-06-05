const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: "http://localhost:9000/dist/"
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000,
        compress: true
    },
    module: {
        rules:
            [
                {
                    test: /\.txt$/,
                    use: 'raw-loader'
                },

                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },

                {
                    test:/\.css$/,
                    use:['style-loader','css-loader']
                },

                {
                    test: /\.scss$/,
                    use: [
                        "style-loader",
                        "css-loader",
                        "sass-loader"
                    ]
                },

                {
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    use: [
                        'file-loader',
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                bypassOnDebug: true, // webpack@1.x
                                disable: true, // webpack@2.x and newer
                            },
                        },
                    ],
                }
            ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/src/assets/index.html'),
            filename: 'index.html',
            inject: 'body',
        })
    ],
};