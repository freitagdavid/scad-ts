import type { ScadNumber } from "../../../types/ScadNumber";

export const ident = (n: ScadNumber) => {
    const result = [];
    for (let i = 0; i < parseInt(n.toString()); i++) {
        const row = [];
        for (let j = 0; j < parseInt(n.toString()); j++) {
        row.push(i === j ? 1 : 0);
        }
        result.push(row);
    }
    return result;
}