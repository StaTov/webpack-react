import webpack from "webpack";
import  devServerBuilder  from "./devServerBuild";
import  devtoolBuilder  from "./devtoolBuild";
import  loaderBuilder  from "./loaderBuild";
import  pluginBuilder  from "./pluginsBuild";
import  resolveBuilder  from "./resolveBuild";
import { TWebpackOptions } from "./types";


const wepbackBuilder = (options: TWebpackOptions): webpack.Configuration => {
    const { pathes, mode } = options;
    return {
        mode,
        entry: './src/index.tsx',
        output: {
            filename: '[name].[contenthash].js',
            path: pathes.output,
            clean: true,
        },
        devtool: devtoolBuilder(options),
        devServer: devServerBuilder(options),
        plugins: pluginBuilder(options),
        module: loaderBuilder(options),
        resolve: resolveBuilder(options),
    }
}

export default wepbackBuilder;