/*Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir
de su altura en metros y peso en kilogramos, que se recibirán como parámetros.*/
function indiceMaseCorporal(altura,peso){
    IMC=peso/(altura*altura);
    return (`Tú IMC es : ${IMC}`);
}
indiceMaseCorporal(1.83,90);
//Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function factorial(numero){
    let factorial=1;
    for(let i=1;i<=numero;i++){
         factorial *=i;
        return factorial;
    }
}
let numero =10;
let fac=factorial(numero);

console.log(`El factorial de ${numero}, es ${fac}`);
/*Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva 
el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país).
Para esto, considera la cotización del dólar igual a R$4,80.*/
function valorDolares(dolar){
    var converDolar= 4.80;
    var convertirReales= converDolar*dolar;
    return convertirReales;
}
let valorDolar = 1000.1;
let valorReales = valorDolares(valorDolar);
console.log(` ${valorDolar} dolares , en reales es  ${valorReales}`);

/*Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
utilizando la altura y la anchura que se proporcionarán como parámetros.*/
function calcularAreaPerimetro(ancho,alto){
    var area = ancho*alto;
    var perimetro= (ancho * 2)+(alto*2);
    console.log(`El area es : ${area}`);
    console.log(`El perimetro es : ${perimetro}`);
    return;
}
let altura = 5;
let ancho = 6;
calcularAreaPerimetro(ancho, altura);


/*Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.*/
function areaperimetroCirculo(radio){
    var pi =3.14;
    area= pi*(radio*radio);
    perimetro=(pi*2)*radio;
    console.log(`El area del  circulo es : ${area}, y el perimetro es : ${perimetro}`);
    
    return
}
let rad= 4;
areaperimetroCirculo(rad);

//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function tablaMultiplicar(numero){
    for (var i= 1; i=numero; i++){
        var resultado =i*numero;
        console.log(`${i} * ${numero} = ${resultado}`);

    }
}
let num=4;
tablaMultiplicar(num);