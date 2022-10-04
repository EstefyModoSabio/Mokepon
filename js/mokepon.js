
function iniciarJuego(){
    
    let botonMascotaJugador= document.getElementById("boton-seleccionar")
    botonMascotaJugador.addEventListener("click", SeleccionarMokeponJugador)


}

function SeleccionarMokeponJugador(){
    alert("Seleccionaste tu mokepon")
}




window.addEventListener("load",iniciarJuego)