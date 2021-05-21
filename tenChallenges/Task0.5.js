function areaOfTriangle(firstSide,secondSide,thirdSide){
   var semiPerimeter = ( firstSide + secondSide + thirdSide) * 0.5;
   var area = Math.sqrt(semiPerimeter * (semiPerimeter-firstSide)*(semiPerimeter-secondSide)*(semiPerimeter-thirdSide));
   return area
}
console.log(areaOfTriangle(3,4,5));
