// https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations#translate

import { isScadNumber, ScadNumber } from '../types/ScadNumber';
import { ScadVector } from '../types/ScadVector';
import { Vector } from '../types/Vector';
import { Chainable } from '../util/Chainable';
import { vector } from '../util/vector-conversion';
import { ITransformation, transformation } from './internals';

export type Translate = ITransformation<'translate', { v: ScadVector }>;

export function translate(this: Chainable, v: Vector | ScadNumber) {
  return transformation('translate', this, {
    v: vector<ScadNumber>(v, isScadNumber),
  });
}

export function translate_x(this: Chainable, x: ScadNumber) {
  return translate.call(this, [x, 0, 0]);
}

export function translate_y(this: Chainable, y: ScadNumber) {
  return translate.call(this, [0, y, 0]);
}

export function translate_z(this: Chainable, z: ScadNumber) {
  return translate.call(this, [0, 0, z]);
}
