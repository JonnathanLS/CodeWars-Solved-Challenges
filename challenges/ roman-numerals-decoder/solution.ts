const Roman: Object = { I: 1, IV: 4, V: 5, IX: 9, X: 10, L: 50, C: 100, D: 500, M: 1000 }
export function solution(roman: string): number {
	let result = 0;
	roman.replace(/IV|IX|I|V|X|L|C|D|M/gi, (value) => result += Roman[value] );	
	return result;
}