let numeroSecreto=0;
let intentos=0;
let numerosSorteados=[];
let numeroMaximo = 10;

function asignarTextoElemnto(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
       
    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemnto('p',`Acertaste al número secreto en : ${intentos} ${(intentos === 1) ? 'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{ 
        //El Usuario bno Certo
        if(numeroDeUsuario>numeroSecreto){

        asignarTextoElemnto('p','El numero es menor');

        }else{
        asignarTextoElemnto('p','El numero es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto(){

    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(numerosSorteados);
    // si ya sorteamos todos los números 
    if(numerosSorteados.length === numeroMaximo){
        asignarTextoElemnto('p','Ya se sortearon todos los números posibles')
    }else{
    // si el numero generado esta en la lista 
        if (numerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
        }else{
        numerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}
function limpiarCaja(){
   document.querySelector('#valorUsuario').value="";
   
}

function reiniciarJuego(){
    //Limpiar Caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar número Aleatorio
    //inicializar el numero de Intentos 
    condicionesIniciales();
    //Deshabilitar botno nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}
function condicionesIniciales(){
    asignarTextoElemnto('h1', 'Juego del número secreto');
    asignarTextoElemnto('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto= generarNumeroSecreto();
    intentos=1;
}
condicionesIniciales();
