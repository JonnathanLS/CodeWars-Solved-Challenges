export function replaceVogals(str:string):string {
    // without regex 
    const replace = (x: string) => 'aeiouAEIOU'.indexOf(x) > -1 ? '?' : x ;
    return str.split('').map( e => replace(e) ).join('');
}