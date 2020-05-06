interface Time { hours: number, minutes: number, seconds: number }

class Runner {
	public timeInSeconds = (this.time.hours * 3600) + (this.time.minutes * 60) + this.time.seconds;
	constructor(private time: Time){}
}

class Team {
	
	private range: Time; 
	private median: Time;
	private average: Time; 
	private runnersTime: number[];
	private time: number;
	public statistics: string;
	
	constructor(private runners: Runner[]){
		this.runnersTime = this.runners.map(runner => runner.timeInSeconds);
		this.time = this.runnersTime.reduce( (acumulator, value) => acumulator + value);
		this.range = this.getRange();
		this.median = this.getMedian();
		this.average = this.getAverage();
		this.statistics = `Range: ${this.hms(this.range)} Average: ${this.hms(this.average)} Median: ${this.hms(this.median)}`;		
	}
	public add(runner: Runner): void { this.runners.push(runner) };
	private hms(time: Time): string { 
		let twoDigits = (num: number): string => num < 9 ? `0${num}` : `${num}`;
		let h: string = twoDigits(time.hours);
		let m: string = twoDigits(time.minutes);
		let s: string = twoDigits(time.seconds);
		return `${h}|${m}|${s}`; 
	} 
	private setTime(seconds: number): Time {
		let time: Time = { hours: 0, minutes: 0, seconds: 0 }
		while(seconds >= 3600) { time.hours++; seconds -= 3600; }
		while(seconds >= 60) { time.minutes++; seconds -= 60; }
		time.seconds = seconds;
		return time;
	}
	private getRange(): Time {
		let range: number = Math.max(...this.runnersTime) - Math.min(...this.runnersTime);
		return this.setTime(range);
	}
	private getAverage(): Time {
		let average: number = parseInt((this.time / this.runners.length).toString());
		return this.setTime(average);
	}
	private getMedian(): Time {
		let timeSorted: number[] = this.runnersTime.sort( (n1, n2) => n1 - n2 );
		let length = timeSorted.length;
		let pos = length / 2;
		let median = length % 2 !== 0 	
			? timeSorted[parseInt(pos.toString())]
			: (timeSorted[pos-1] + timeSorted[pos+1]) / 2;
		return this.setTime(median);
	}
}
export class G964 {

    public static stat = (data: string) => {
		let runners_string = data.split(',');
		let runners = runners_string.map(runner_string => {
			const TS = runner_string.split('|'); // Time String
			let time: Time = { hours: +TS[0], minutes: +TS[1], seconds: +TS[2] };
			return new Runner(time);
		});
		let team = new Team(runners);
		return team.statistics;
    }
}