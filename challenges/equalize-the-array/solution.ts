export function equalize(array:number[]):string[]{
    return !array.length ? [] : array.map(e => {
        let x = e - array[0];
        return `${x < 0 ? "" : "+"}${x}`;
    });
}