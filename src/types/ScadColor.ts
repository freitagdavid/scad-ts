import { ScadNumber } from './ScadNumber';

type RGB = [ScadNumber, ScadNumber, ScadNumber];
type RGBA = [ScadNumber, ScadNumber, ScadNumber];

export type ScadColor = RGB | RGBA | string;
