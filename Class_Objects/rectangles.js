class Rectangle{
    constructor( length, width){
        this.length = length;
        this.width = width;
    }


area() {
    return this.length * this.width;
  }

  perimeter() {
    return 2 * (this.length + this.width);
  }
}

let rect1 = new Rectangle(10, 5);

console.log("Area:", rect1.area());
console.log("Perimeter:", rect1.perimeter());