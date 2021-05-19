function celsiusToFahrenheit(temperature){
    var fahrenheit = Math.round(temperature * 1.8 + 32);
    return fahrenheit;   
}
function fahrenheitToCelsius(temperature){
     var celsius = Math.round(5/9 * (temperature-32));
     return celsius; 
}
const a = celsiusToFahrenheit(78);
console.log(a);

const b = fahrenheitToCelsius(45);
console.log(b);


