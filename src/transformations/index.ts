import type { Color } from './color';
import type { LinearExtrude } from './extrusion/linear_extrude';
import type { RotateExtrude } from './extrusion/rotate_extrude';
import type { Mirror } from './mirror';
import type { Offset } from './offset';
import type { Projection } from './projection';
import type { Resize } from './resize';
import type { Rotate } from './rotate';
import type { Scale } from './scale';
import type { Translate } from './translate';

export type Transformation =
  | Color
  | LinearExtrude
  | Mirror
  | Offset
  | Projection
  | Resize
  | Rotate
  | RotateExtrude
  | Scale
  | Translate;

export * from './color';
export * from './extrusion/linear_extrude';
export * from './extrusion/rotate_extrude';
export * from './mirror';
export * from './offset';
export * from './projection';
export * from './resize';
export * from './rotate';
export * from './scale';
export * from './translate';
