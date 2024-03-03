import  webpack  from "webpack";
import { TWebpackOptions } from "./types";


const devtoolBuilder = ({mode}: TWebpackOptions): webpack.Configuration["devtool"] => {
    const isDev = mode === "development";
    return isDev && "source-map";
};

export default devtoolBuilder;