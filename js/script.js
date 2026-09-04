const miAudio = document.getElementById('musica-fondo');


function activarMusica() {
    miAudio.play()
        .then(() => {
            console.log("Música iniciada por interacción del usuario.");

            eventosInteraccion.forEach(evento => {
                window.removeEventListener(evento, activarMusica);
            });
        })
        .catch(error => {

            console.log("Esperando una interacción más directa para reproducir:", error);
        });
}

const eventosInteraccion = ['click', 'keydown', 'mousemove', 'scroll', 'touchstart'];


eventosInteraccion.forEach(evento => {
    window.addEventListener(evento, activarMusica, { passive: true });
});
