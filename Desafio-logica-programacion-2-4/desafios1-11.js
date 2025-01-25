//Crea una lista vacía llamada "listaGenerica".
let listaGenerica=[];
/*Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos:
'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.*/
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];
//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java', 'Ruby' , 'GoLang');
//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarElementos(){
    return console.log(lenguagesDeProgramacion);
}
/*Crea una función que muestre en la consola todos los elementos de la lista 
"lenguagesDeProgramacion en orden inverso.*/
function recorrerinverso(){
    for(var i=lenguagesDeProgramacion.length-1; i>=0;i--){
        console.log(lenguagesDeProgramacion[i]);
    }
}
recorrerinverso();
//crea una función que calcule el promedio de los elementos en una lista de números.


function promedioListaNumeros(lista){
    let suma=0;
    for(var i=0;i<lista.length;i++){
        suma += lista[i];
    }
    return suma/lista.length;
} 
let listanum=[20,50,40];
let media =promedioListaNumeros(listanum);
console.log(`El promedio de los números es : ${media}`);
//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function mayormenor(lista) {
    if (lista.length === 0) {
        console.log("La lista está vacía");
        return;
    }
    let mayor = lista[0];
    let menor = lista[0];
    for (var i = 1; i < lista.length; i++) {
        if (lista[i] > mayor) {
            mayor = lista[i];
        }
        if (lista[i] < menor) {
            menor = lista[i];
        }
    }
    console.log(`El Número Mayor de la lista es: ${mayor}`);
    console.log(`El Número Menor de la lista es: ${menor}`);
}
let numeros = [20, 15, 50, 10, 1];
mayormenor(numeros);


//Crea una función que devuelva la suma de todos los elementos en una lista.

function sumaDeLista(lista){
    suma=0;
    for(var i=0;i<lista.length;i++){
        suma+=lista[i];
    }
    return suma;        
}
let listaNumeros=[10,52,25,40];
let sum =sumaDeLista(listaNumeros);
console.log(`La suma de todos los elementos de la lista es : ${sum}`);


/*Crea una función que reciba dos listas de números del mismo tamaño y devuelva 
una nueva lista con la suma de los elementos uno a uno.*/

function listasDeNumeros(lista1,lista2){
    let lis=[];
    for (var i=0;i<lista1.length;i++){
        
            lis.push(lista1[i]+lista2[i]);
        }
    return lis;

    }

let list = [10,20,40,30];
let lit  = [15,25,35,45];
let newlist= listasDeNumeros(list,lit);
console.log(`La nueva lista de numeros es : ${newlist}`);
//Crea una función que reciba una lista de números y devuelva una 
// nueva lista con el cuadrado de cada número.

function newListaDeNumeros(lisNumeros){
    let li = [];
    for(var i=0;i<lisNumeros.length;i++){
        li.push(lisNumeros[i]*lisNumeros[i])
    }
    return li;
}

let a=[1,23,43,5];
let newa = newListaDeNumeros(a);
console.log(`La nueva lista con el cuadrado de los numeros es: ${newa}`);
