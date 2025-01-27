# CHALLENGE-AMIGO-SECRETO

Este es un juego desarrollado en JavaScript. 

## ¿Cómo se juega?
El usuario deberá introducir un nombre en el campo marcado y dar click en el  **Añadir**.
No está permitido incluir números, simbolos o espacios en el campo de entrada.

Cuando se haya finalizado de introducir todos los nombres deseados, el usuario debe dar un click en el botón **Sortear amigo** para generar al Amigo Secreto Aleatorio.

Muchas gracias.


## v1.0

### Added or Changed
Se incluyen los siguientes archivos

- app.js
- index.html
- README.md
- style.css

## Notas especiales al Código

La función amigoFieldClean NO aceptó el siguiente método .reset():

```
document.getElementById('amigo').reset();
```

Por lo que finalmente, la función quedó como sigue:

```
// Esta función limpia el elemento HTML input con ID amigo
function amigoFieldClean(){
    document.getElementById('amigo').value = '';
}
```
La siguiente línea de código utiliza REGEX para evitar que se introdujeran
números, símbolos, espacio o un nombre en blanco:

```  
    if (nombreAmigo.match("^[A-Za-z]{1,20}[A-Za-z]$")) {
        //...
    }
```

