export class G964 {
	// OPTIMIZED SOLUTION - BEST TIME
	// TEST EXECUTION TIME IN 26ms
	public static listSquared3 = (m: number, n:number) => {
		const list: number[][] = [];
		let sum: number = 0;
		for (let x = m; x <= n; x++) {
			if (x === 1) { list.push([1, 1]); continue }
			for (let y = 1; y <= x; y++) sum += x % y === 0 ? y * y : 0;
			if(Math.sqrt(sum) % 1 === 0) list.push([x, sum]);
			sum = 0;
		}
		return list;
	}

	// SECOND SOLUTION - With Primary Factor Logic
	// TEST EXECUTION TIME IN 81ms - WORST TIME
	public static listSquared2(m: number, n:number) {
		const result: number[][] = [];
		// Step Cycle
		const procedures = (num: number) =>{
			const divs = G964.divisors(num);
			const sqr_divs: number[] = G964.squared_divisors(divs);
			const sum_sqr_divs: number = G964.sum_of_the_squared_divisors(sqr_divs);
			if ( G964.its_a_square(sum_sqr_divs) ) result.push([num,sum_sqr_divs]);
		}
		// Main Step
		for (let i = m; i <= n; i++) procedures(i);
		return result;
	}
	// Suport Steps
	private static it_is_divisible = (num: number, div: number) => num % div === 0;
	private static squared_divisors = (array: number[]) => array.map(n => n * n);
	private static sum_of_the_squared_divisors = (array: number[]) => array.reduce((acc, cv) => acc + cv);
	private static its_a_square = (num: number) => Math.sqrt(num) % 1 === 0;
	private static prime_factors = (num: number) => {
		const higher_number = +Math.sqrt(num).toPrecision(1);
		let list_of_intergers = [];
		for (let i = 2; i <= num; i++) list_of_intergers.push(i);
		for (let i = 2, x = 1; i <= higher_number; x++) {
			if (list_of_intergers.indexOf(i) > -1)
			list_of_intergers = list_of_intergers.filter(x => x === i ? true : x % i !== 0 );
			i = list_of_intergers[x];
		}
		return list_of_intergers;
	}
	private static divisors = (num: number): number[] => {
		let divisors: number[] = [1];
		const primes = G964.prime_factors(num);
		let moment: number[] = [];
		let i = 0;
		while( num > 1 ){
			if(!G964.it_is_divisible(num, primes[i])) { i++; continue; }
			let rest = num / primes[i];
			divisors.map(y => moment.push(y * primes[i]));
			divisors.push(...moment.filter(n => divisors.indexOf(n) === -1 ));
			if(!G964.it_is_divisible(rest, primes[i])) i++;
			num = rest;
		}
		return divisors.sort( (n1, n2) => n1 - n2 );	
	}

	// FIRST SOLUTION - LOOP 
	// TEST EXECUTION TIME IN 31ms
	public static listSquared1 = (m: number, n: number) => {
		const result: number[][] = [];
		// Suport Steps
		const its_a_divisor = (num: number, div: number) => num % div === 0;
		const divisors = (num: number): number[] => {
			const divisors: number[] = [];
			for(let i = 1; i <= num; i++) 
				if(its_a_divisor(num, i)) divisors.push(i); 
			return divisors;
		}
		const squared_divisors = (array: number[]) => array.map(n => n * n);
		const sum_of_the_squared_divisors = (array: number[]) => array.reduce((acc, cv) => acc + cv);
		const its_a_square = (num: number) => Math.sqrt(num) % 1 === 0;
		// Step Cycle
		const procedures = (num: number) =>{
			const divs = divisors(num);
			const sqr_divs: number[] = squared_divisors(divs);
			const sum_sqr_divs: number = sum_of_the_squared_divisors(sqr_divs);
			if ( its_a_square(sum_sqr_divs) ) result.push([num,sum_sqr_divs]);
		}
		// Main Step
		for (let i = m; i <= n; i++) procedures(i);
		return result;
	}
}
