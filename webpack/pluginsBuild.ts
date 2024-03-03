import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { TWebpackOptions } from "./types";
import BundleAnalyzerPlugin from "webpack-bundle-analyzer";
export const pluginBuilder = ({
    pathes,
    mode,
    analyse }: TWebpackOptions): webpack.Configuration["plugins"] => {

    const isDev = mode === "development";
    const isProd = mode === "production";

    const AnalyzerPlugin = BundleAnalyzerPlugin.BundleAnalyzerPlugin;
    
    const plugins: webpack.Configuration["plugins"] = [

        new HtmlWebpackPlugin({
            title: "frontend",
            template: pathes.html,
            favicon: pathes.favicon
        })
    ];

    if (isDev) {
        plugins.push(new webpack.ProgressPlugin());
    }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css"
        }));
    }

    if (analyse) {
        plugins.push(new AnalyzerPlugin());
    }

    return plugins;
};

export default pluginBuilder;