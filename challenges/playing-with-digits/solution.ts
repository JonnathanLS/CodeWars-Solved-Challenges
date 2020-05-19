export class G964 {

    public static digPow = (n: number, p: number) => {
		let result = 1, sum = 0;
		n.toString().split('').forEach(n => sum += Math.pow( +n, p++ ));
		while ( (result * n) < sum ) result++;
		return (result * n) === sum ? result : -1 ;
    }
}