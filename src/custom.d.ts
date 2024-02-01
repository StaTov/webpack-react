
declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"
declare module "*.gif"
declare module "*.svg" {
  import * as React from "react";
  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  export default ReactComponent;
}