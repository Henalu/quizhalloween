window.onload = () => {
    var preguntas = [
        {
            pregunta: "¿pregunta1?",
            respCorrecta: "correcta",
            respIncorrectas: ['incorrecta 1', 'incorrecta 2', 'incorrecta 3']
        },
        {
            pregunta: "¿pregunta2?",
            respCorrecta: "correcta",
            respIncorrectas: ['incorrecta 1', 'incorrecta 2', 'incorrecta 3']
        },
        {
            pregunta: "¿pregunta3?",
            respCorrecta: "correcta",
            respIncorrectas: ['incorrecta 1', 'incorrecta 2', 'incorrecta 3']
        },
        {
            pregunta: "¿pregunta4?",
            respCorrecta: "correcta",
            respIncorrectas: ['incorrecta 1', 'incorrecta 2', 'incorrecta 3']
        }
    ];
    localStorage.setItem('contador', JSON.stringify(0));
    localStorage.setItem('preguntas', JSON.stringify(preguntas));
    localStorage.setItem('respuestas', JSON.stringify([]));
    localStorage.setItem('soluciones', JSON.stringify([]));
    pintaPregunta(0);
}

function pintaPregunta(i) {
    var pregunta = JSON.parse(localStorage.getItem('preguntas'))[i];
    var zonaPregunta = document.getElementsByClassName('pregunta')[1];
    zonaPregunta.innerText = pregunta.pregunta;
    pintaRespuestas(i);
}

/* Genera un array de posiciones aleatorias para las respuestas*/
function posRandom() {
    var posiciones = [];
    var num = Math.floor(Math.random() * 4);
    for (let i = 0; i < 4; i++) {
        posiciones.push((num + i) % 4);
    }
    return posiciones;
}

/* Pinta las respuestas en un orden aleatorio y guarda en el local estorage la posicion de la respuesta correcta*/
function pintaRespuestas(i) {
    var pregunta = JSON.parse(localStorage.getItem('preguntas'))[i];
    var respuestas = [pregunta.respCorrecta].concat(pregunta.respIncorrectas);
    var opciones = document.getElementsByClassName('opcion')
    var posiciones = posRandom();
    for (let i = 0; i < opciones.length; i++) {
        opciones[posiciones[i]].innerText = respuestas[i];
    }
    var soluciones = JSON.parse(localStorage.getItem('soluciones'));
    soluciones.push(posiciones[0]);
    localStorage.setItem('soluciones', JSON.stringify(soluciones));
}

function responde(i) {
    console.log(JSON.parse(localStorage.getItem('respuestas')));
    var respuestas = JSON.parse(localStorage.getItem('respuestas'));
    respuestas.push(i);
    localStorage.setItem('respuestas', JSON.stringify(respuestas));
    var contador = JSON.parse(localStorage.getItem('contador'));
    contador++;
    localStorage.setItem('contador', JSON.stringify(contador));
    if (contador < JSON.parse(localStorage.getItem('preguntas')).length) {
        pintaPregunta(contador);
    } else {
        window.location.href = "./results.html";
    }
}