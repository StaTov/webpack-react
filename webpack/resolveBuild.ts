import webpack from "webpack"
import { TWebpackOptions } from "./types"

export const resolveBuilder = ({pathes}: TWebpackOptions): webpack.Configuration['resolve'] => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            src: pathes.src
        }
    }
};

export default resolveBuilder;