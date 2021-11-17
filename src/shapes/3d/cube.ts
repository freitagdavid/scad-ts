// https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Primitive_Solids#cube

import { ScadNumber } from '../../types/ScadNumber';
import { ScadVector3 } from '../../types/ScadVector';
import { Vector3 } from '../../types/Vector';
import { vector3 } from '../../util/vector-conversion';
import { IShape, shape } from '../internals';

export type Cube = IShape<
  'cube',
  { size: ScadVector3 | ScadNumber; center: boolean }
>;

export function cube(size = cube.defaultSize, center = cube.defaultCenter) {
  return shape('cube', {
    size: vector3(size),
    center,
  });
}

cube.defaultSize = [1, 1, 1] as Vector3 | ScadNumber;
cube.defaultCenter = false;
