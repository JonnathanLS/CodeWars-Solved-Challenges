export class Kata {
	static squareDigits(num: number): number {
	  return +num.toString().split('').map(n => +n * +n).join('');
	}
  }