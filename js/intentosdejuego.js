let ataqueJugador


function iniciarjuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', selecionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
}

function selecionarMascotaJugador() {
    let inputHdoso = document.getElementById('Hdoso')
    let inputBarrosta = document.getElementById('Barrosta')
    let inputQuementa = document.getElementById('Quementa')
    let Mascotaplayer = document.getElementById("nombre-mascota")

    if (inputHdoso.checked){
        Mascotaplayer.innerHTML = 'Hdoso'
    } else if (inputBarrosta.checked) {
        Mascotaplayer.innerHTML = 'Barrosta'
    } else if (inputQuementa.checked) {
        Mascotaplayer.innerHTML = 'Quementa'
    } else if (" ") {
        alert('no has seleccionado a tu mascota')
    }
    
    selecionarMascotaPc()
}

function selecionarMascotaPc() {
    let Ataque = aleatorio(1,3)
    let Mascotasenemigo = document.getElementById('nombre-mascotaPc')

    if(Ataque == 1 ) {
        Mascotasenemigo.innerHTML = 'Hdoso'
    } else if (Ataque == 2 ) {
        Mascotasenemigo.innerHTML = 'Barrosta'
    } else if (Ataque == 3) {
        Mascotasenemigo.innerHTML = 'Quementa'
    }
}

function ataqueFuego() {
    let Ataque = aleatorio(1,3)

    ataqueJugador = 'Fuego'
    alert(ataqueJugador)
}
function ataqueTierra() {
    ataqueJugador = 'Tierra'
    alert(ataqueJugador)
}
function ataqueAgua() {
    ataqueJugador = 'Agua'
    alert(ataqueJugador)
}

if(Ataque == 1 ) {
    ataqueJugador.innerHTML = 'Agua'
} else if (Ataque == 2 ) {
    ataqueJugador.innerHTML = 'Fuego'
} else if (Ataque == 3) {
    ataqueJugador.innerHTML = 'Tierra'
}

function aleatorio (min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min)
}
window.addEventListener('load', iniciarjuego)