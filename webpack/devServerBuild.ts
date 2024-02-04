import type { Configuration as DevServerConfiguration } from "webpack-dev-server"
import { TWebpackOptions } from "./types";

const devServerBuilder = ({pathes, port=3001}: TWebpackOptions): DevServerConfiguration => ({

    static: pathes.devServer,
    historyApiFallback: true,
    compress: true,
    port,
    hot: true,
});

export default devServerBuilder;