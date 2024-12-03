var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Ingeniera en Análisis de Datos')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Desarrolladora Fronted Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Si lo puedes imaginar, lo puedes crear')
    .pauseFor(2500)
    .deleteChars(5)
    .typeString('programar')
    .pauseFor(2500)
    .start();