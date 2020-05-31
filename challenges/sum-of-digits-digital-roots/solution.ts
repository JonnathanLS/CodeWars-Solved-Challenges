export const digitalRoot = (n:number):number => {
	const transform = (): string[] => n.toString().split('');
	while(n.toString().length > 1){
		let result = 0;
		transform().map(dig => result += +dig);
		n = result;
	}
	return n;
};

// Most optimized solution possible by the user Unnamed: (n - 1)% 9 + 1;