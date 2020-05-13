export const summation = (num:number): number => { 
    return num ? num + summation(num-1) : 0;
  }