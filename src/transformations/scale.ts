// https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations#scale

import { isScadNumber, ScadNumber } from '../types/ScadNumber';
import { ScadVector, ScadVector3 } from '../types/ScadVector';
import { Vector, Vector3 } from '../types/Vector';
import type { Chainable } from '../util/Chainable';
import { vector, vector3 } from '../util/vector-conversion';
import { ITransformation, transformation } from './internals';

export type Scale = ITransformation<
  'scale',
  { v: ScadVector; auto: boolean | ScadVector3<boolean> }
>;

export function scale(
  this: Chainable,
  v: Vector | ScadNumber,
  auto = scale.defaultAuto
) {
  return transformation('scale', this, {
    v: vector<ScadNumber>(v, isScadNumber),
    auto: vector3(auto),
  });
}

scale.defaultAuto = false as boolean | Vector3<boolean>;

export function scale_x(this: Chainable, x: ScadNumber) {
  return scale.call(this, [x, 1, 1]);
}

export function scale_y(this: Chainable, y: ScadNumber) {
  return scale.call(this, [1, y, 1]);
}

export function scale_z(this: Chainable, z: ScadNumber) {
  return scale.call(this, [1, 1, z]);
}
