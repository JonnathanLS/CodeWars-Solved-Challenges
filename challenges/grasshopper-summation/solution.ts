export const summation = {
    // My Solution
    recursive: (n:number): number => n ? n + summation.recursive(n-1) : 0,
    // Other Competitor Solutions
    iterative: (n:number): number => [...Array(n + 1).keys()].reduce((ac, cv) => ac + cv),
    unusual: (n:number): number => n * (n + 1) / 2, // optimized solution { THE BEST }
}
