window.addEventListener('load', () => {
    document.getElementsByClassName('pregunta')[0].style.display = 'none';
    document.getElementsByClassName('pregunta')[2].style.display = 'flex';

    var elegirDif = document.querySelectorAll('.elegirDif');
    elegirDif[0].addEventListener('click', () => {
        fetch('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple')
            .then(res => res.json())
            .then(api => {
                let preguntas = api.results;
                console.log(preguntas);
                localStorage.setItem('preguntas', JSON.stringify(preguntas));
                pintaPregunta(0);
            })
    });
    elegirDif[1].addEventListener('click', () => {
        fetch('https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple')
        .then(res => res.json())
            .then(api => {
                let preguntas = api.results;
                console.log(preguntas);
                localStorage.setItem('preguntas', JSON.stringify(preguntas));
                pintaPregunta(0);
            })
    });
    elegirDif[2].addEventListener('click', () => {
        fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=multiple')
        .then(res => res.json())
            .then(api => {
                let preguntas = api.results;
                console.log(preguntas);
                localStorage.setItem('preguntas', JSON.stringify(preguntas));
                pintaPregunta(0);
            })
    });
    localStorage.setItem('contador', JSON.stringify(0));
    localStorage.setItem('respuestas', JSON.stringify([]));
    localStorage.setItem('soluciones', JSON.stringify([]));

})//Fin Load

function pintaPregunta(i) {
    document.getElementsByClassName('pregunta')[0].style.display = 'flex';
    document.getElementsByClassName('pregunta')[2].style.display = 'none';
    var pregunta = JSON.parse(localStorage.getItem('preguntas'))[i];
    var zonaPregunta = document.getElementsByClassName('pregunta')[1];
    zonaPregunta.innerText = pregunta.question;
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

/* Pinta las respuestas en un orden aleatorio y guarda en 
el local estorage la posicion de la respuesta correcta*/
function pintaRespuestas(i) {
    var pregunta = JSON.parse(localStorage.getItem('preguntas'))[i];
    var respuestas = [pregunta.correct_answer].concat(pregunta.incorrect_answers);
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