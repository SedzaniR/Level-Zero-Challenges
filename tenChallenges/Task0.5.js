function areaOfTriangle(a,b,c){
   var s = ( a + b +c) * 0.5;
   var area = Math.sqrt(s * (s-a)*(s-b)*(s-c));
   return area
}

const a = areaOfTriangle(3,4,5);
console.log("The area is "+a);