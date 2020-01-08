
class Polygon{
  constructor(sides){
    this.sides = sides
  }

  get countSides(){
    return this.sides.length
  }

  get perimeter(){
    return this.sides.reduce((acc, num) => acc + num)
  }

}

class Triangle extends Polygon {
  constructor(sides){
    super(sides)
  }

  get isValid(){
    debugger
    if (this.sides.length == 3){
      let side_1 = this.sides[0]
      let side_2 = this.sides[1]
      let side_3 = this.sides[2]
      return ((side_1 + side_2 > side_3) && (side_2 + side_3 > side_1) && (side_1 + side_3 > side_2))
    }
  }
}


class Square extends Polygon{
  constructor(sides){
    super(sides)
  }

  get isValid(){
    if (this.sides.length == 4){
      return this.sides.every(side => side == this.sides[0])
    }
  }

  get area(){
    return this.sides[0] ** 2
  }
}
