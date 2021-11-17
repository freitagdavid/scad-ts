// https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Primitive_Solids#sphere

import { ScadNumber } from '../../types/ScadNumber';
import { ScadRoundingVariables } from '../../types/ScadRoundingVariables';
import { IShape, shape } from '../internals';

export type Sphere = IShape<
  'sphere',
  { r: ScadNumber } & ScadRoundingVariables
>;

export function sphere(
  radius = sphere.defaultRadius,
  params = sphere.defaultParams
) {
  return shape('sphere', { r: radius, ...params });
}

sphere.defaultRadius = 1 as ScadNumber;
sphere.defaultParams = {} as ScadRoundingVariables;
