export function findSmallestInt(args: number[]): number {
	let small = args[0];
	args.forEach(n => { if(n < small) small = n });
	return small;
}