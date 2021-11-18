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

type Guard<T> = (x: any) => x is T;

export function vector2<T, U>(input: Vector2<T> | U): ScadVector2<T> | U;
export function vector2<T>(
  input: Vector2<T> | T,
  isPlain?: Guard<T>
): ScadVector2<T>;
export function vector2<T, U>(input: Vector2<T> | U, isPlain?: Guard<T>) {
  if (!isPlain) {
    return isVector2(input) ? toScadVector2(input) : input;
  }

  if (isPlain(input)) {
    return [input, input];
  }

  return isVector2(input, isPlain)
    ? toScadVector2(input)
    : throwInvalidType(input);
}

export function vector3<T, U>(input: Vector3<T> | U): ScadVector3<T> | U;
export function vector3<T>(
  input: Vector3<T> | T,
  isPlain?: Guard<T>
): ScadVector3<T>;
export function vector3<T, U>(input: Vector3<T> | U, isPlain?: Guard<T>) {
  if (!isPlain) {
    return isVector3(input) ? toScadVector3(input) : input;
  }

  if (isPlain(input)) return [input, input, input] as Vector3<T>;

  return isVector3(input, isPlain)
    ? toScadVector3(input)
    : throwInvalidType(input);
}

export function vector<T, U>(input: Vector<T> | U): ScadVector<T> | U {
  if (isVector2(input)) return toScadVector2(input);
  if (isVector3(input)) return toScadVector3(input);
  return input;
}

function toScadVector2<T>(input: Vector2<T>): ScadVector2<T> {
  return isScadVector2(input) ? input : [input.x, input.y];
}

function toScadVector3<T>(input: Vector3<T>): ScadVector3<T> {
  return isScadVector3(input) ? input : [input.x, input.y, input.z];
}

// function toScadVector<T>(input: Vector<T>): ScadVector<T> {
//   return isVector2(input) ? toScadVector2(input) : toScadVector3(input);
// }

function throwInvalidType(input: unknown): never {
  console.error({ input });
  throw new Error('Invalid vector type');
}
