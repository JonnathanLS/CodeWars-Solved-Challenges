export function binaryToString(binary: string) {
	const fn = (i: number): string[] => i > 0 ? [binary.slice(i-8,i), ...fn(i-8)] : [];
	return fn(binary.length).reverse().map(v => String.fromCharCode(parseInt(v,2))).join('');
}