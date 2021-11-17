import type { Chainable } from '../util/Chainable';
import { ITransformation, transformation } from './internals';

export type Projection = ITransformation<'projection', { cut: boolean }>;

export function projection(this: Chainable, cut = false) {
  return transformation('projection', this, { cut });
}
