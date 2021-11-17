import {
  isScadVector2,
  isScadVector3,
  ScadVector,
  ScadVector2,
  ScadVector3,
} from '../types/ScadVector';
import {
  isVector2,
  isVector3,
  Vector,
  Vector2,
  Vector3,
} from '../types/Vector';

function toScadVector2<T>(input: Vector2<T>): ScadVector2<T> {
  return isScadVector2(input) ? input : [input.x, input.y];
}

function toScadVector3<T>(input: Vector3<T>): ScadVector3<T> {
  return isScadVector3(input) ? input : [input.x, input.y, input.z];
}

// function toScadVector<T>(input: Vector<T>): ScadVector<T> {
//   return isVector2(input) ? toScadVector2(input) : toScadVector3(input);
// }

export function vector2<T, U>(input: Vector2<T> | U): ScadVector2<T> | U;
export function vector2<T, U>(
  input: Vector2<T> | U,
  isPlain?: (x: any) => x is T
): ScadVector2<T> | Exclude<T, U>;
export function vector2<T, U>(
  input: Vector2<T> | U,
  isPlain?: (x: any) => x is T
): ScadVector2<T> | U {
  if (isPlain && isPlain(input)) return [input, input];
  return isVector2(input) ? toScadVector2(input) : input;
}

export function vector3<T, U>(input: Vector3<T> | U): ScadVector3<T> | U;
export function vector3<T, U>(
  input: Vector3<T> | U,
  isPlain?: (x: any) => x is T
): ScadVector3<T> | Exclude<T, U>;
export function vector3<T, U>(
  input: Vector3<T> | U,
  isPlain?: (x: any) => x is T
) {
  if (isPlain && isPlain(input)) return [input, input, input];
  return isVector3(input) ? toScadVector3(input) : input;
}

export function vector<T, U>(input: Vector<T> | U): ScadVector<T> | U {
  if (isVector2(input)) return toScadVector2(input);
  if (isVector3(input)) return toScadVector3(input);
  return input;
}
