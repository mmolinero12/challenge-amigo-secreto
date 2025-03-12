// El principal objetivo de este desafío es fortalecer las habilidades en lógica de
// programación. 

// Declara e inicializa la lista amigos
var amigos = [];     // Para que la variable amigos sea global se debe declarar como var


// Esta función mostrará a los amigos que se han introducido hasta el momento
// Se mostrarán en el elemento HTML con ID listaAmigos
function mostrarAmigos(){
    let elementoHTML = document.getElementById('listaAmigos');  
    elementoHTML.innerHTML = '';
    textoAmigos = '';
    for(let i=0; i <= (amigos.length - 1); i++){
        textoAmigos = textoAmigos.concat(amigos[i] + '<br>');
    }    
    elementoHTML.innerHTML = textoAmigos;
}

// Esta función limpia el elemento HTML input con ID amigo
function amigoFieldClean(){
    document.getElementById('amigo').value = '';
}

// Esta función agrega un nuevo amigo a la lista amigos.
// Adicionalmente valida que lo introducido sea un nombre.
// no están permitidos números o simbolos
function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    
    if (nombreAmigo.match("^[A-Za-z]{1,20}[A-Za-z]$")) {
        amigos.push(nombreAmigo);
        mostrarAmigos();
        amigoFieldClean();
    } else {
        alert("Por favor, introduce un nombre correcto");
    }
}

// Esta función elegirá al amiguinSecreto de la lista amigos.
// Valida que la lista amigos no esté vacía, de lo contrario, se pedirá agregar un nombre.
function sortearAmigo(){
    if (amigos.length > 0){
        let amiguinSecreto = amigos[Math.floor(Math.random() * amigos.length)];   // Me había equivodado. Es incorrecto usar ceil. Me faltó el let
        let elementoHTML = document.getElementById('listaAmigos');  
        elementoHTML.innerHTML = 'La amiga secreta o el amigo secreto es: ' + amiguinSecreto;
    } else{
        alert('Favor de introducir un nombre más');
    }   
}




