// Defino dos variables principales, numeroAzar genera un número aleatorio entre 1 y 100//

let contador = 0;
let numeroAzar = Math.floor(Math.random() * (100 - 1 + 1) + 1);

// Defino constantes referidas al dom

const botonAdivinar = document.getElementById("botonAdivinar");
const prueba = document.getElementById("prueba");
const numeroInput = document.getElementById("numeroInput");
const divStart = document.getElementById("start");
const botonStart = document.getElementById("botonStart");
const juegoDiv = document.getElementById("juego");

// Defino una función que me oculta el juego y permite al usuario reiniciarlo mediante
// la creación de un botón.

function reiniciarJuego() {
    numeroInput.style.visibility = 'hidden';
    botonAdivinar.style.visibility = 'hidden';
    const reiniciarJuego = document.createElement("button");
    reiniciarJuego.id = "reiniciarJuego";
        reiniciarJuego.textContent = 'Reiniciar juego';
        prueba.appendChild(reiniciarJuego);
        reiniciarJuego.addEventListener('click', function(){
            contador = 0;
            numeroAzar = Math.floor(Math.random() * (100 - 1 + 1) + 1);
            prueba.innerHTML = '';
            numeroInput.style.visibility = 'visible';
            botonAdivinar.style.visibility = 'visible';
            
})
}

// Defino una función para el juego en cuestion.

function juegoAdivinar() {
    console.log(numeroAzar);
    // console.log solo con fines depurativos //
    switch (numeroInput.value<=100 && numeroInput.value > 0) {
        case true: 
        // Se suma un intento al contador y se crea su contraparte para mostrar en pantalla
        // la cantidad de intentos restantes.
        contador = contador + 1;
        contadorInvertido = 10 - contador;
        // Defino dos variables que contengan strings para indicarle al usuario datos y pistas
        let mensaje;
        let pista;
        if (numeroInput.value > numeroAzar){
        mensaje = '¡Te pasaste!'
        }
        else {
        mensaje = '¡Uy!¡Quedaste corto!'
        }
        let distanciaEnNumeros = numeroAzar - numeroInput.value;
        if ((distanciaEnNumeros <= 5 && distanciaEnNumeros >= 0) || (distanciaEnNumeros < 0 && distanciaEnNumeros >= -5)) {
            pista = 'cerca';
        } else {
            pista = 'lejos';
        }

        // Redondea en caso de coma en el input
        numeroInput.value = parseInt(numeroInput.value);

        const crearElemento = document.createElement("p");
        if (contador < 9) {
        if (numeroAzar == numeroInput.value) {
        prueba.textContent = '';
        crearElemento.textContent ='¡Ganaste! Has adivinado el numero: '+numeroInput.value;
        crearElemento.id = "ganador";
        prueba.appendChild(crearElemento);
        reiniciarJuego();
        }
        else {
            prueba.textContent = '';
            crearElemento.textContent = mensaje+' No has adivinado el número, ¡estás '+pista+'!, quedan '+contadorInvertido+' intentos';
        prueba.appendChild(crearElemento);
        }
    }
    else if (contador == 9) {
        if (numeroAzar == numeroInput.value) {
            prueba.textContent = '';
        crearElemento.textContent = '¡Ganaste! Has adivinado el numero: '+numeroInput.value;
        crearElemento.id = "ganador";
        prueba.appendChild(crearElemento);
        reiniciarJuego();
        }
        else {
            prueba.textContent = '';
            crearElemento.textContent = mensaje+ ' No has adivinado el número, ¡estás '+pista+'!, queda '+contadorInvertido+' intento';
        prueba.appendChild(crearElemento);
        }
    }
    else if (contador == 10) {
        if (numeroAzar == numeroInput.value) {
            prueba.textContent = '';
            crearElemento.textContent = '¡Ganaste! Has adivinado el numero: '+numeroInput.value;
            crearElemento.id = "ganador";
            prueba.appendChild(crearElemento);
            reiniciarJuego();
            }
            else {
                prueba.textContent = '';
                crearElemento.textContent = mensaje+' No has adivinado el número, el cual era '+numeroAzar+', ¡no quedan más intentos!';
            prueba.appendChild(crearElemento);
            reiniciarJuego();
            } 
            }
        
        break;
        case false: 
        prueba.textContent = '';
        const crearElemento2 = document.createElement("p");
        crearElemento2.textContent = '¡Error! Coloca un número entre 1 y 100';
        prueba.appendChild(crearElemento2);
        break;
    }
}

//// FUNCIONALIDAD DEL BOTÓN ADIVINAR ////

botonAdivinar.addEventListener( 'click', function() {
  juegoAdivinar();
})

//// FUNCIONALIDAD DEL BOTÓN START                              ////
//// Oculta el mensaje inicial y muestra el juego a continuación////

botonStart.addEventListener( 'click', function() {
    if (juegoDiv.style.visibility === 'hidden') {
        juegoDiv.style.visibility = 'visible';
        juegoDiv.style.opacity = 1;
        divStart.style.display = 'none';
    }
  })

