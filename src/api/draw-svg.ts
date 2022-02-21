import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';
import { theme } from '../../stitches.config';
import { SVG, registerWindow } from '@svgdotjs/svg.js';
import type { Container } from '@svgdotjs/svg.js';
import {
  createVoronoiTessellation,
  random,
} from '@georgedoescode/generative-utils';
//@ts-ignore
import * as svgdom from 'svgdom';
const window = svgdom.createSVGWindow();
registerWindow(window, window.document);

export default function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  // draw the generative svg
  // check if the svg is already drawn
  if (!req.body) return res.status(400).send('No body');
  if (
    typeof req.body.height !== 'number' &&
    typeof req.body.width !== 'number'
  ) {
    return res.status(400).send('height and width must be numbers');
  }
  const height = req.body.height;
  const width = req.body.width;
  const windowSurface = height * width;
  const averageCircleSurface = 23720;
  const svg = SVG(window.document.documentElement) as Container;
  const points = [
    ...Array(Math.floor(windowSurface / averageCircleSurface)),
  ].map(() => ({
    x: random(0, width),
    y: random(0, height),
  }));
  const tessellation = createVoronoiTessellation({
    width,
    height,
    points,
    relaxIterations: 2,
  });
  type Cell = {
    innerCircleRadius: number;
    centroid: { x: number; y: number };
  };
  tessellation.cells.forEach((cell: Cell) =>
    svg
      .circle(cell.innerCircleRadius * 2)
      .cx(cell.centroid.x)
      .cy(cell.centroid.y)
      .stroke(
        random([
          `${theme.colors.green.value}`,
          `${theme.colors.coral.value}`,
          `${theme.colors.blue.value}`,
        ])
      )
      .attr('stroke-width', `0.75px`)
      .fill({ opacity: 0 })
      .scale(0.9)
  );
}
