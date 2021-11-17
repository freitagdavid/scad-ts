import { Modifier } from '../modifiers';
import { Operation } from '../operations';
import { Shape } from '../shapes/index';
import { Transformation } from '../transformations/index';

export type Scad = Modifier | Operation | Shape | Transformation;
