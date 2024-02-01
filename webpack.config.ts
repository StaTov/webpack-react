import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from 'webpack';
import 'webpack-dev-server';
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

type TEnvProps = {
    mode: 'development' | 'production'
}

export default (env: TEnvProps) => {

    const {mode} = env;

    const isDev = mode === 'development'
    const isProd = mode === 'production'

    const config: webpack.Configuration = {
        mode,
        entry: './src/index.tsx',
        output: {
            filename: '[name].[contenthash].js',
            path: path.resolve(__dirname, 'dist'),
            clean: true,
        },
        devtool: isDev && 'source-map',
        devServer: {
            static: path.resolve(__dirname, 'dist'),
            historyApiFallback: true,
            compress: true,
            port: 4000,
            hot: true,
            client: {
                progress: true,
            }
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'frontend',
                template: path.resolve(__dirname, 'public', 'index.html'),
                favicon: path.resolve(__dirname, 'public', 'favicon.ico')
            }),
            isProd && new BundleAnalyzerPlugin(),
         //   isDev && new webpack.ProgressPlugin(),
            isProd && new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css'
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/i,
                    use: [
                        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                sourceMap: true
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                sourceMap: true,
                                postcssOptions: {
                                    plugins: [
                                        [
                                            "autoprefixer",
                                            {
                                                // Options
                                            },
                                        ],
                                        [
                                            "cssnano",
                                            {
                                                preset: "default"
                                            }
                                        ]
                                    ],
                                },
                            },
                        }
                    ]
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
    };
    return config;
};

