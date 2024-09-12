declare module '*.svg' {
  import React from 'react';
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
  export const ReactComponent: React.VFC<React.SVGProps<SVGSVGElement>>;
}
