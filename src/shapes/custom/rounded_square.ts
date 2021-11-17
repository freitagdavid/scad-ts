import { hull } from '../../operations';
import { ScadRoundingVariables } from '../../types/ScadRoundingVariables';
import { Vector2 } from '../../types/Vector';
import { isNumber } from '../../util/type-guards';
import { vector2 } from '../../util/vector-conversion';
import { circle } from '../2d/circle';

export function rounded_square(
  size = rounded_square.defaultSize,
  radius = rounded_square.defaultRadius,
  { center, ...params } = rounded_square.defaultParams
) {
  const [x, y] = vector2(size, isNumber);
  const maxRadius = Math.min(x, y) / 2;
  const r = radius > 0 && radius < maxRadius ? radius : maxRadius / 8;
  const corner = circle(r, params);

  const square = hull(
    corner.translate([r, r]),
    corner.translate([x - r, r]),
    corner.translate([x - r, y - r]),
    corner.translate([r, y - r])
  );

  return center ? square.translate([-x / 2, -y / 2]) : square;
}

rounded_square.defaultSize = 1 as number | Vector2<number>;
rounded_square.defaultRadius = 0.125 as number;
rounded_square.defaultParams = { center: true } as ScadRoundingVariables & {
  center: boolean;
};
