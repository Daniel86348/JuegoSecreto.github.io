let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo= 10;
let numeroMaximoDeIntentos= numeroMaximo;


function asignarTextoElemento(elemento,texto){
    let elemntoHTML = document.querySelector(elemento);
    elemntoHTML.innerHTML= texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(numeroSecreto);

    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos== 1) ? "vez":"veces"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El Usuario no acerto
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El Número secreto es mayor')
        }
        intentos++
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    //El # se utiliza con querySelector si queremos el id y no usamos el getElementById
    document.querySelector('#valorUsuario').value= '';
}


function generaNumeroSecreto(){
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    //si ya usamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximoDeIntentos){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else{
        // Si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generaNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}


function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
function condicionesIniciales(){
    asignarTextoElemento('p',`Ingrese un número del 1-${numeroMaximo}`);
    asignarTextoElemento('h1','Juego del número secre');
    numeroSecreto = generaNumeroSecreto();
    intentos= 1;
}

condicionesIniciales();