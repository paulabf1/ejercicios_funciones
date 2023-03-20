// Ejercicio 3 (Crea una función que tome el radio de un círculo como argumento y devuelva el
//área del círculo

function area (radio){
    return radio * radio * Math.PI;
}

let total_area = area(30);
console.log("El total área de radio 30 es "+ total_area);
