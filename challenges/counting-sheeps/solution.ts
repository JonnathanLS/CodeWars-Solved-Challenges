export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]): number {
	let result: number = 0;
	arrayOfSheep.forEach(el => { if (typeof el === "boolean")  if (el) result++; })
	return result;
}