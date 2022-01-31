declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: React.FC<React.SVGProps<SVGSVGElement>>;
  export default src;
}
declare module '@georgedoescode/generative-utils' {
  const random: (arg1: Array<Type> | number, arg2?: number) => Type | number;
  const createVoronoiTessellation: (arg: any) => any;
}
