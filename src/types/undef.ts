export const undef = 'undef' as const;
export type undef = typeof undef | null | undefined;

export function isScadUndef(value: any): value is undef {
  return value === undef || value == null;
}
