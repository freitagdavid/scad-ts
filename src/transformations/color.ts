// https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations#color

import { ScadColor } from '../types/ScadColor';
import { ScadNumber } from '../types/ScadNumber';
import type { Chainable } from '../util/Chainable';
import { ITransformation, transformation } from './internals';

export type Color = ITransformation<
  'color',
  { c: ScadColor; alpha: ScadNumber }
>;

export function color(
  this: Chainable,
  code: ScadColor,
  alpha = color.defaultAlpha
) {
  return transformation('color', this, { c: code, alpha });
}

color.defaultAlpha = 1 as ScadNumber;
