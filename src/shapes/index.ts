import type { Circle } from './2d/circle';
import type { Polygon } from './2d/polygon';
import type { Square } from './2d/square';
import type { Cube } from './3d/cube';
import type { Cylinder } from './3d/cylinder';
import type { Polyhedron } from './3d/polyhedron';
import type { Sphere } from './3d/sphere';

export type Shape =
  | Circle
  | Cube
  | Cylinder
  | Polygon
  | Polyhedron
  | Sphere
  | Square;

export * from './2d/circle';
export * from './2d/polygon';
export * from './2d/square';
export * from './3d/cube';
export * from './3d/cylinder';
export * from './3d/polyhedron';
export * from './3d/sphere';
export * from './custom/rounded_cube';
export * from './custom/rounded_square';
