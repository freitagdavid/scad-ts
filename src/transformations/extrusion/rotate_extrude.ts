// https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/2D_to_3D_Extrusion#Rotate_Extrude

import { ScadNumber } from '../../types/ScadNumber';
import { ScadRoundingVariables } from '../../types/ScadRoundingVariables';
import { Chainable } from '../../util/Chainable';
import { ITransformation, transformation } from '../internals';

type Params = { convexity?: number } & ScadRoundingVariables;

export type RotateExtrude = ITransformation<
  'rotate_extrude',
  { angle: ScadNumber } & Params
>;

export function rotate_extrude(
  this: Chainable,
  angle = rotate_extrude.defaultAngle,
  params = rotate_extrude.defaultParams
) {
  return transformation('rotate_extrude', this, { angle, ...params });
}

rotate_extrude.defaultAngle = 360 as ScadNumber;
rotate_extrude.defaultParams = {} as Params;
