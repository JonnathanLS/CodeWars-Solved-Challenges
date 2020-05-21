export const number = {
	loop: (busStops: [number, number][]): number => {
		let peoples = 0;
		busStops.map(bus => peoples += bus[0] - bus[1]);
		return peoples;
	},
	reduce: (busStops: [number, number][]): number => {
		return busStops.reduce( (peoples, [on, off]) => peoples += on - off, 0);
	}
}