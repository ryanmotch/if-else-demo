function convertToCelcius(fahrenheit) {
  let celcius = (fahrenheit - 32) * (5 / 9);
  return celcius;
}

function describeTemperature(fahrenheit) {
    const celcius = convertToCelcius(fahrenheit);
}

let description;
if (celcius <= 0) {
    description = "very cold";
}else if (celcius <= 20) {
    description = "cold";
}else if (celcius <= 30) {
    description = "warm";
}else if (celcius <= 40) {
    description = "hot";
}else {
    description = "very hot";
}
return `The temperature is ${celcius}, which is ${description}.`;