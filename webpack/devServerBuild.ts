import type { Configuration as DevServerConfiguration } from "webpack-dev-server"
import { TWebpackOptions } from "./types";

const devServerBuilder = ({pathes, port}: TWebpackOptions): DevServerConfiguration => ({

    static: pathes.devServer,
    historyApiFallback: true,
    compress: true,
    port,
    hot: true,
    client: {
        progress: true,
    }
});

export default devServerBuilder;