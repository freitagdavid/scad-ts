import { Scad } from '../types/Scad';
import { serialize } from './serialize';

export interface ScadSerializeMethod {
  serialize: typeof serialize;
}

export type Serializable = Scad & ScadSerializeMethod;

const proto = { serialize };

export const isScadSerializable = (x: any): x is ScadSerializeMethod =>
  proto.isPrototypeOf(x);

export function serializable<T>(x: T): T & Serializable {
  return { ...x, __proto__: proto } as any;
}
