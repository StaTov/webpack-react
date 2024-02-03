import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { TWebpackOptions } from "./types";
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

export const pluginBuilder = ({ pathes, mode, analyse }: TWebpackOptions): webpack.Configuration['plugins'] => {

    const isDev = mode === 'development';
    const isProd = mode === 'production';
   
    const plugins: webpack.Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            title: 'frontend',
            template: pathes.html,
            favicon: pathes.favicon
        })
    ];

    if (isDev) {
        plugins.push(new webpack.ProgressPlugin())
    }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }))
    }

    if (analyse) {
        plugins.push(new BundleAnalyzerPlugin())
    }
    
    return plugins;
};

export default pluginBuilder;