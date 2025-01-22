/*Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
Crea una función que muestre en la consola el mensaje "El botón fue clicado"
siempre que se presione el botón "Console".
Crea una función que se ejecute cuando se haga clic en el botón "prompt",
preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con 
el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
Crea una función que muestre una alerta con el mensaje: 
"Yo amo JS" siempre que se presione el botón "Alerta".
Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
*/

let etiqueta = document.querySelector('h1');
etiqueta.innerHTML = "Hora del Desafío";

function mostarMensaje(){
    console.log('El botón fue clicado');
}

function ciudadesDeBrasil(){
    let ciudad = prompt("¿Que ciudad de Brasil as Visitado?: ");
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}
function mensaje(){
    alert('Yo amo JS')
}
function sumaDosNumeros(){
    let num1 =parseInt(prompt("Ingresa el primer número para sumar: "));
    let num2 =parseInt(prompt("Ingresa el segundo número para sumar: "));
    suma = num1 + num2;
    alert(`El resultado de la suma de ${num1} mas ${num2} es, ${suma}`);
}