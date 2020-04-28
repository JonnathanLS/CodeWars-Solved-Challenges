export const tribonacci = {
	iteration: (s: number[], n: number): number[] => {
		for (let i = 0; s.length < n; i++) s.push(s[i] + s[i + 1] + s[i + 2]);
		return s.slice(0,n);	
	},
	recursive: (sequence: number[], n: number): number[] => {
		const l = sequence.length, s = sequence;
		if(n > 3) s.push(s[l-1] + s[l-2] + s[l-3]);
		return n > 3 ? tribonacci.recursive(s, n - 1) 
			: n == 1 ? [ s[0] ] 
			: n == 2 ? [ s[0], s[1] ] 
			: n == 0 ? [] : s ;
	}
}

