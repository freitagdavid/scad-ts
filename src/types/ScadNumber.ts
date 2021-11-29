import { isNumber } from '../util/type-guards';
import { isScadStatement, ScadStatement } from './ScadStatement';

export type ScadNumber = number | ScadStatement;

export function isScadNumber(x: any): x is ScadNumber {
  return isNumber(x) || isScadStatement(x);
}
