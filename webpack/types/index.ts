
export type TWebpackOptions = {
    mode: "development" | "production";
    pathes: TPathes;
    port?: number | undefined;
    analyse?: boolean;
}


export type TEnvProps = {
    mode: "development" | "production",
    port?: number,
    analyse?: boolean 
}

enum EPathes {
    OUTPUT = "output",
    DEVSERVER = "devServer",
    HTML = "html",
    FAVICON = "favicon",
    SRC = "src"
}

export type TPathes = Record<EPathes, string>