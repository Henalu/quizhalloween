window.addEventListener('load', () => {
    document.getElementsByClassName('pregunta')[0].style.display = 'none';
    document.getElementsByClassName('pregunta')[2].style.display = 'flex';
    document.getElementsByClassName('pregunta')[2].style.marginTop = "8%";
    document.getElementsByTagName('h1')[1].style.display = 'none'

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
    elegirDif[3].addEventListener('click', () => {
        let preguntas = [
            {
                question: "¿Cual es el fruto seco favorito de Coke?",
                correct_answer: "Anacardos",
                incorrect_answers: ['Cacahuetes', 'Pasas', 'Nueces']
            },
            {
                question: "¿Cuantos subscriptores tiene Lydia en su canal de YouTube?",
                correct_answer: "20.700",
                incorrect_answers: ['5', '105.000', '827']
            },
            {
                question: "¿Quien ve las clases desde más lejos en todo The Bridge?",
                correct_answer: "Gerardo",
                incorrect_answers: ['Jorge', 'Henalu', 'Sergio']
            },
            {
                question: "¿Quien es el/la más friki de toda la clase de Full-Stack?",
                correct_answer: "Jose Angel",
                incorrect_answers: ['Coke', 'Maria', 'Gerardo']
            },
            {
                question: "¿Sobre que tema domina más Helena?",
                correct_answer: "Fantasías",
                incorrect_answers: ['CSS', 'HTML', 'JavaScript']
            },
            {
                question: "¿Quien tiene un perro guía sin ser ciego?",
                correct_answer: "Sergio",
                incorrect_answers: ['Davinia', 'Lydia', 'Jorge']
            },
            {
                question: "¿Quien domina más sobre efectos de Google Meet?",
                correct_answer: "Henalu",
                incorrect_answers: ['Jorge', 'Jose Angel', 'Davinia']
            },
            {
                question: "¿?",
                correct_answer: "correcta",
                incorrect_answers: ['incorrecta 1', 'incorrecta 2', 'incorrecta 3']
            },
            {
                question: "¿pregunta1?",
                correct_answer: "correcta",
                incorrect_answers: ['incorrecta 1', 'incorrecta 2', 'incorrecta 3']
            },
            {
                question: "¿Quien va a conseguir que todos sus alumnos ganen 100.000 al año?",
                correct_answer: "Davinia",
                incorrect_answers: ['El profesor/a de UX', 'El profesor/a de Ciber', 'El profesor/a de Data']
            }
        ];
        localStorage.setItem('preguntas', JSON.stringify(preguntas));
        pintaPregunta(0);
    });
    localStorage.setItem('contador', JSON.stringify(0));
    localStorage.setItem('respuestas', JSON.stringify([]));
    localStorage.setItem('soluciones', JSON.stringify([]));

})//Fin Load

function pintaPregunta(i) {
    var h1 = document.getElementsByTagName('h1')[1];
    h1.style.display = 'flex'
    h1.style.paddingTop = '4%'
    var contador = JSON.parse(localStorage.getItem('contador'));
    contador++;
    localStorage.setItem('contador', JSON.stringify(contador));
    h1.innerHTML = "Pregunta número " + contador

    document.getElementsByClassName('pregunta')[0].style.marginTop = '2%';
    document.getElementsByClassName('pregunta')[0].style.display = 'flex';
    document.getElementsByClassName('pregunta')[2].style.display = 'none';

    var pregunta = JSON.parse(localStorage.getItem('preguntas'))[i];
    var zonaPregunta = document.getElementsByClassName('pregunta')[1];
    zonaPregunta.innerHTML = pregunta.question;
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
        opciones[posiciones[i]].innerHTML = respuestas[i];
    }
    var soluciones = JSON.parse(localStorage.getItem('soluciones'));
    soluciones.push(pregunta.correct_answer);
    localStorage.setItem('soluciones', JSON.stringify(soluciones));
}

function responde(i) {
    var respuestas = JSON.parse(localStorage.getItem('respuestas'));
    var respuesta = document.getElementsByClassName('opcion');
    respuestas.push(respuesta[i].innerText);
    localStorage.setItem('respuestas', JSON.stringify(respuestas));
    var contador = JSON.parse(localStorage.getItem('contador'));
    if (contador < JSON.parse(localStorage.getItem('preguntas')).length) {
        pintaPregunta(contador);
    } else {
        window.location.href = "./results.html";
    }
}