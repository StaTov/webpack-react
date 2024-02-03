import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { TWebpackOptions } from "./types";


export const loaderBuilder = ({ mode }: TWebpackOptions): webpack.Configuration['module'] => {
    const isDev = mode === 'development';

    const tsxLoader = {

        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,

    }
    const cssLoader = {

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
    }

    const imgLoader = {

        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    };

    const fontLoader = {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
    };

    return {rules: [tsxLoader, cssLoader, imgLoader, fontLoader]};
}

export default loaderBuilder;