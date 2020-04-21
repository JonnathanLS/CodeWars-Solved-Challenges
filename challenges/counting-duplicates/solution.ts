export function duplicateCount(text: string): number{ 
    // without regex logic
    const values = text.toLowerCase().replace(/ /g,'');
    const distinctValues = [... new Set(values)]; 
    const count = (s: string) => values.split(s).length - 1 > 1 ;
    return distinctValues.filter(value => count(value)).length; 
}