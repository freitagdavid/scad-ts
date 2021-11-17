// https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations#rotate

import { ScadNumber } from '../types/ScadNumber';
import { ScadVector3 } from '../types/ScadVector';
import { Vector3 } from '../types/Vector';
import { Chainable, ScadMethods } from '../util/Chainable';
import { vector3 } from '../util/vector-conversion';
import { ITransformation, transformation } from './internals';

export type Rotate = ITransformation<
  'rotate',
  { a: ScadNumber; v: ScadVector3 } | { a: ScadVector3 }
>;

export function rotate(this: Chainable, angle: Vector3): Rotate & ScadMethods;
export function rotate(
  this: Chainable,
  angle: ScadNumber,
  axis: Vector3
): Rotate & ScadMethods;
export function rotate(
  this: Chainable,
  angle: Vector3 | ScadNumber,
  axis?: Vector3
) {
  const params = axis
    ? { a: angle as ScadNumber, v: vector3(axis) }
    : { a: vector3(angle as Vector3) };

  return transformation('rotate', this, params);
}

export function rotate_x(this: Chainable, angle: ScadNumber) {
  return rotate.call(this, angle, [1, 0, 0]);
}

export function rotate_y(this: Chainable, angle: ScadNumber) {
  return rotate.call(this, angle, [0, 1, 0]);
}

export function rotate_z(this: Chainable, angle: ScadNumber) {
  return rotate.call(this, angle, [0, 0, 1]);
}
