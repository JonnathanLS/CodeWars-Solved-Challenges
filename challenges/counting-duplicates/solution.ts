export function duplicateCount(text: string): number{
    const values = text.toLowerCase();
    const distinctValues = [... new Set(values)]; 
    const count = (s: string) => values.split(s).length - 1 > 1 ;
    return distinctValues.filter(value => count(value)).length;
}