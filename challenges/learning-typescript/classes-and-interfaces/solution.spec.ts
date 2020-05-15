import {Circle, Square} from "./solution";
import {expect} from "chai";

var EPSILON = 0.000001;
describe("classes-and-interfaces", () =>{
  it("asserts", () => {
    describe("The Square class", () => {
      it("should calculate area and perimeter correctly", () => {
        var square = new Square(2);
        expect(square.area()).to.equal(4);
        expect(square.perimeter()).to.equal(8);
      });
    });
    describe("The Circle class", () => {
      it("should calculate area and perimeter correctly", () => {
        var circle = new Circle(1);
        expect(circle.area()).to.equal(Math.PI);
        expect(circle.perimeter()).to.equal(2*Math.PI);
      });
    });  
  });
  
})
