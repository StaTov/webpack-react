import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';
import { TPathes, TEnvProps, TWebpackOptions } from './webpack/types';
import wepbackBuilder from './webpack/webpackBuild';



const pathes: TPathes = {
    output: path.resolve(__dirname, 'build'),
    devServer: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
    src: path.resolve(__dirname, 'src')
}

export default (env: TEnvProps) => {

    const { mode, port, analyse } = env;

    const options: TWebpackOptions = {
        mode,
        pathes,
        port,
        analyse,
    }

    const config: webpack.Configuration = wepbackBuilder(options)
    return config;
};

