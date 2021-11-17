import { ScadNumber } from './ScadNumber';

export type Vector2<T = ScadNumber> = readonly [T, T] | [T, T] | { x: T; y: T };
export type Vector3<T = ScadNumber> =
  | readonly [T, T, T]
  | [T, T, T]
  | { x: T; y: T; z: T };

export type Vector<T = ScadNumber> = Vector2<T> | Vector3<T>;

export function isVector2<T = unknown>(
  val: Vector2<T> | any
): val is Vector2<T> {
  if (!val || typeof val !== 'object') return false;
  if (Array.isArray(val) && val.length === 2) return true;
  if ('x' in val && 'y' in val) return true;
  return false;
}

export function isVector3<T = unknown>(
  val: Vector3<T> | any
): val is Vector3<T> {
  if (!val || typeof val !== 'object') return false;
  if (Array.isArray(val) && val.length === 3) return true;
  if ('x' in val && 'y' in val && 'z' in val) return true;
  return false;
}

export function isVector<T = unknown>(val: Vector<T> | any): val is Vector<T> {
  return isVector2(val) || isVector3(val);
}
