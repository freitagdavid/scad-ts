import { ident } from "./linalg";

export const LEFT = [-1, 0, 0];
export const RIGHT = [1, 0, 0];
export const FRONT = [0, -1, 0];
export const FWD = FRONT;
export const FORWARD = FRONT;
export const BACK = [0, 1, 0];
export const BOTTOM = [0, 0, -1];
export const BOT = BOTTOM;
export const DOWN = BOTTOM;
export const TOP = [0, 0, 1];
export const UP = TOP;
export const CENTER = [0, 0, 0];
export const CTR = CENTER;
export const CENTRE = CENTER;
export const INCH = 25.4;
export const IDENT = ident(4)