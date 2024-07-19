const sectionSeleccionarAtaque = document.getElementById('selecionar-ataque')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonreinicio = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('selecionar-mascota')

const Mascotaplayer = document.getElementById("nombre-mascota")

const Mascotasenemigo = document.getElementById('nombre-mascotaPc')

const spanlifeplayer = document.getElementById('life')
const spanlifepc = document.getElementById('life1')

const sectionmensajes = document.getElementById('mensajes')
const sectionmensajes3 = document.getElementById('mensajes3')
const sectionmensajes2 = document.getElementById('resultado')  
const contendorPintura = document.getElementById('contendorPintura')
const contenedorAtaques = document.getElementById('contenedorAtaques')

let Dirtyspacepersonajes = []
let ataqueJugador
let ataquePc1
let opcionpersonaje
let inputHdoso 
let inputBarrosta 
let inputQuementa 
let mascotaJugador
let ataquesDirtyspace
let botonFuego 
let botonTierra 
let botonAgua 
let botones = []
let ataqueJugadorr = []
let lifeplayer = 3
let lifepc = 3

class Dirtyspace {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let Hdoso = new Dirtyspace('Hdoso', './imagenespersonajes/hdoso-removebg-preview.png', 5)

let Barrosta = new Dirtyspace('Barrosta', './imagenespersonajes/Barrosta-removebg-preview.png', 5)

let Quementa = new Dirtyspace('Quementa', './imagenespersonajes/Quementa-removebg-preview.png', 5)

Hdoso.ataques.push(
    { nombre: '🚿', id: 'boton-agua' },
    { nombre: '🚿', id: 'boton-agua' },
    { nombre: '🚿', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🪴', id: 'boton-tierra' },
)
Barrosta.ataques.push(
    { nombre: '🪴', id: 'boton-tierra' },
    { nombre: '🪴', id: 'boton-tierra' },
    { nombre: '🪴', id: 'boton-tierra' },
    { nombre: '🚿', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
)
Quementa.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🚿', id: 'boton-agua' },
    { nombre: '🪴', id: 'boton-tierra' },
)

Dirtyspacepersonajes.push(Hdoso, Barrosta, Quementa)


function iniciarjuego() {
    sectionSeleccionarAtaque.style.display = 'none'

    Dirtyspacepersonajes.forEach((Dirtyspace) => {
        opcionpersonaje = `
        <input type="radio" name="mascota" id=${Dirtyspace.nombre} /> 
        <label class="tarjeta-dirty-place" for=${Dirtyspace.nombre}>
            <p>${Dirtyspace.nombre}</p>
            <img src=${Dirtyspace.foto} alt=${Dirtyspace.nombre}>
        </label>
         `
    contendorPintura.innerHTML += opcionpersonaje

      inputHdoso = document.getElementById('Hdoso')
      inputBarrosta = document.getElementById('Barrosta')
      inputQuementa = document.getElementById('Quementa')
    })

    botonMascotaJugador.addEventListener('click', selecionarMascotaJugador)
    
    botonreinicio.addEventListener('click', reinciarjuego)
}
function selecionarMascotaJugador() {
    
    sectionSeleccionarMascota.style.display = 'none'

    
    sectionSeleccionarAtaque.style.display = 'flex'
        
    if (inputHdoso.checked){
        Mascotaplayer.innerHTML = inputHdoso.id
        mascotaJugador = inputHdoso.id
    } else if (inputBarrosta.checked) {
        Mascotaplayer.innerHTML = inputBarrosta.id
        mascotaJugador = inputBarrosta.id
    } else if (inputQuementa.checked) {
        Mascotaplayer.innerHTML = inputQuementa.id
        mascotaJugador = inputQuementa.id
    } else if (" ") {
        alert('no has seleccionado a tu mascota')
    }
    
    extraerAtaques(mascotaJugador)
    selecionarMascotaPc()
}

function extraerAtaques(mascotaJugador) {
    let ataques 
    for (let i = 0; i < Dirtyspacepersonajes.length; i++) {
        if(mascotaJugador === Dirtyspacepersonajes[i].nombre) {
           ataques = Dirtyspacepersonajes[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesDirtyspace = `
        <button id=${ataque.id} class="color-boton BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesDirtyspace
    });
    
    let botonFuego = document.getElementById('boton-fuego')
    let botonTierra = document.getElementById('boton-tierra')
    let botonAgua = document.getElementById('boton-agua')
    let botones = document.querySelectorAll('.BAtaque')

    botonFuego.addEventListener('click', ataqueFuego)
    botonTierra.addEventListener('click', ataqueTierra)
    botonAgua.addEventListener('click', ataqueAgua)
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('Fuego')
                console.log(ataqueJugadorr)
                boton.style.background = '#112f58'
            } else if (e.target.textContent === '🚿') {
                ataqueJugador.push('Agua')
                console.log(ataqueJugadorr)
                boton.style.background = '#112f58'
            } else {
                ataqueJugador.push('Tierra')
                console.log(ataqueJugadorr)
                boton.style.background = '#112f58'
            }
        })
    })
}

function selecionarMascotaPc() {
    let Ataque = aleatorio(0, Dirtyspacepersonajes.length - 1)
    Mascotasenemigo.innerHTML = Dirtyspacepersonajes[Ataque].nombre
    secuenciaAtaque()
}
function ataqueFuego() {
    ataqueJugador = 'Fuego'
    ataqueEnemigoPc()
}
function ataqueTierra() {
    ataqueJugador = 'Tierra'
    ataqueEnemigoPc()
}
function ataqueAgua() {
    ataqueJugador = 'Agua'
    ataqueEnemigoPc()
}
function ataqueEnemigoPc() {
    let GolpeAleatorio = aleatorio(1, 3)

    if (GolpeAleatorio == 1) {
        ataquePc1 = 'Agua'
    } else if (GolpeAleatorio == 2) {
        ataquePc1 = 'Fuego'
    } else if (GolpeAleatorio == 3) {
        ataquePc1 = 'Tierra'
    }
    combate()
}
function combate() {
    if(ataquePc1 == ataqueJugador) {
        crearMensaje("empate 😶‍🌫️")
    } else if 
       ((ataqueJugador == 'Agua' && ataquePc1 == 'Fuego') || 
        (ataqueJugador == 'Fuego' && ataquePc1 == 'Tierra') || 
        (ataqueJugador == 'Tierra' && ataquePc1 == 'Agua')) {
        crearMensaje("ganaste 😊")
        lifepc--
        spanlifepc.innerHTML = lifepc
    } else {
        crearMensaje("perdiste 😒")
        lifeplayer--
        spanlifeplayer.innerHTML = lifeplayer
    }
    checkVidas()
}
function checkVidas() {
    if (lifepc == 0) {
       alert('!!HAS GANADO Littel Bitch!!')
        botonFuego.disabled = true
        botonTierra.disabled = true
        botonAgua.disabled = true
       
    } else if (lifeplayer == 0) {
       alert('Perdiste Sungaaaa') 
        botonFuego.disabled = true
        botonTierra.disabled = true
        botonAgua.disabled = true    
    }
}
function crearMensaje(triunfos) {  

        let notification = document.createElement('p')
        let parrafo = document.createElement('p')
        let parrafo1 = document.createElement('p')

        sectionmensajes2.innerHTML = triunfos
        parrafo.innerHTML = ataqueJugador  
        parrafo1.innerHTML = ataquePc1 
    
        sectionmensajes.appendChild(parrafo)
        sectionmensajes3.appendChild(parrafo1)
}
function reinciarjuego() {
    location.reload()
}
function aleatorio (min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min)
}
window.addEventListener('load', iniciarjuego)