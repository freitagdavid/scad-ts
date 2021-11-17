// https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Primitive_Solids#polyhedron

import { ScadNumber } from '../../types/ScadNumber';
import { ScadVector3 } from '../../types/ScadVector';
import { undef } from '../../types/undef';
import { Vector3 } from '../../types/Vector';
import { vector3 } from '../../util/vector-conversion';
import { IShape, shape } from '../internals';

export type Polyhedron = IShape<
  'polyhedron',
  {
    points: ScadVector3[] | undef;
    faces: ScadNumber[][] | ScadNumber[] | undef;
    convexity: ScadNumber;
  }
>;

export function polyhedron(
  points = polyhedron.defaultPoints,
  faces = polyhedron.defaultFaces,
  convexity = polyhedron.defaultConvexity
) {
  return shape('polyhedron', {
    points: Array.isArray(points) ? points.map((x) => vector3(x)) : points,
    faces,
    convexity,
  });
}

polyhedron.defaultPoints = undef as Vector3[] | undef;
polyhedron.defaultFaces = undef as ScadNumber[][] | ScadNumber[] | undef;
polyhedron.defaultConvexity = 1 as ScadNumber;
