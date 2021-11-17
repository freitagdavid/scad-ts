import { ScadNumber } from './ScadNumber';

export type ScadVector2<T = ScadNumber> = readonly [T, T] | [T, T];
export type ScadVector3<T = ScadNumber> = readonly [T, T, T] | [T, T, T];

export type ScadVector<T = ScadNumber> = ScadVector2<T> | ScadVector3<T>;

export function isScadVector2<T = unknown>(
  val: ScadVector2<T> | any
): val is ScadVector2<T> {
  return val && Array.isArray(val) && val.length === 2;
}

export function isScadVector3<T = unknown>(
  val: ScadVector3<T> | any
): val is ScadVector3<T> {
  return val && Array.isArray(val) && val.length === 3;
}

export function isScadVector<T = unknown>(
  val: ScadVector<T> | any
): val is ScadVector<T> {
  return isScadVector2(val) || isScadVector3(val);
}
