// https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/2D_Primitives#circle

import { ScadNumber } from '../../types/ScadNumber';
import { ScadRoundingVariables } from '../../types/ScadRoundingVariables';
import { IShape, shape } from '../internals';

export type Circle = IShape<'circle', { r: ScadNumber }>;

export function circle(
  radius = circle.defaultRadius,
  params = circle.defaultParams
) {
  return shape('circle', { r: radius, ...params });
}

circle.defaultRadius = 1 as ScadNumber;
circle.defaultParams = {} as ScadRoundingVariables;
