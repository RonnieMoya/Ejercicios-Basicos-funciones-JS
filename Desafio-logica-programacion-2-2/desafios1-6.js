//Crear una función que muestre "¡Hola, mundo!" en la consola

function holaMundo(){
    console.log("¡Hola, mundo!");
}
holaMundo();

//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function nombre(nombre){
    console.log(`¡Hola, ${nombre}!`);
}
nombre("Ronnie Moya");// llamada y paso de parameto a la funcion nombre 

let num1=parseInt(prompt('Ingresa un número'));
//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

function duplicarValorDelNumero(numero){
    return numero * 2;
}
let numeroDoble= duplicarValorDelNumero(5);
console.log(numeroDoble);

//Crear una función que reciba tres números como parámetros y devuelva su promedio.

function promedio(num1, num2, num3){
    return(num1+num2+num3)/3;
}
promedio(15,20,10)
console.log(`El promedio es : ${promedio}`);

//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function mayor(numero1, numero2){
   return numero1>numero2? numero1:numero2;
}
let numeroMayor = mayor(10,12);
console.log(numeroMayor);

/*Crear una función que reciba un número como parámetro y devuelva el resultado
de multiplicar ese número por sí mismo.*/

function numeroPorNumero(a){
    return a*a;
}
let nu = numeroPorNumero(5);
console(nu);