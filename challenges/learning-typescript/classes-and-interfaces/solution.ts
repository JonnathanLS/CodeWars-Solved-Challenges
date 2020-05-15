interface IGeometricFigure {
    area: () => number;
    perimeter: () => number;
}
  
export class Square implements IGeometricFigure {
    constructor( private side: number ){}
    area = () => this.side * this.side;
    perimeter = () => this.side * 4;
}

export class Circle implements IGeometricFigure {
    constructor(private radius: number){}
    area = () => Math.PI * Math.pow(this.radius, 2);
    perimeter = () => ( 2 * Math.PI ) * this.radius;
}
  