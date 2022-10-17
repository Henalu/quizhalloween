window.addEventListener('load', () => {
    //Funcion para desabilitar el Scroll
    function disableScroll() {
        window.scrollTo(0, 0);
    }

    //Estilos Capa auxiliar del Aside
    var capa = document.querySelector('#capa');
    capa.style.display = 'none';
    capa.style['background-color'] = 'rgb(0 0 0 / 30%)';
    capa.style.height = '2000px';
    capa.style.width = '100%';
    capa.style.position = 'absolute';
    capa.style['z-index'] = '2';

    //Mostrar Aside con el resto del Menu
    var aside = document.querySelector('aside');
    var iconoMenu = document.querySelector('#iconoMenu');
    iconoMenu.style.cursor = 'pointer';
    iconoMenu.addEventListener('click', () => {
        aside.style.display = 'block';
        aside.style['z-index'] = '3';
        capa.style.display = 'block';

        window.addEventListener('scroll', disableScroll); //llamamos a la funcion que desabilita el scroll
    });

    var cerrarAside = document.querySelector('#cerrarAside');
    cerrarAside.style.cursor = 'pointer';
    cerrarAside.addEventListener('click', () => {
        aside.style.display = 'none';
        capa.style.display = 'none';
        window.removeEventListener('scroll', disableScroll); //Eliminamos el eventlistener para habilitar scroll
    });

    var botonGrafica = document.querySelector('#botonGrafica');
    botonGrafica.style.cursor = 'pointer';
    botonGrafica.addEventListener('click', ()=>{
        window.location.href = "home.html#myChart";
        setTimeout
    });

    var botonGrafica = document.querySelector('#botonGrafica');
    botonGrafica.addEventListener('click', ()=>{
        
    });

    //mostramos los resultados
    muestraResultados();
});//fin Load

function muestraResultados() {
    var preguntas = JSON.parse(localStorage.getItem('preguntas'));
    for (let i = 0; i < preguntas.length; i++) {
        pintaDivPregunta(i, preguntas);
    }
    evaluacion();
}

function pintaDivPregunta(i, preguntas) {
    var pregunta = preguntas[i];
    var resultados = document.querySelector('#resultados');
    let div = document.createElement('div');
    div.setAttribute('class', 'soluciones');
    let h3 = document.createElement('h3');
    h3.innerHTML = 'Pregunta ' + (i + 1);
    let p = document.createElement('p');
    p.innerHTML = pregunta.question;

    div.appendChild(h3);
    div.appendChild(p);
    resultados.appendChild(div);

    pintaRespuestas(i, pregunta, div);
}

function pintaRespuestas(i, pregunta, div) {
    var respuestas = [pregunta.correct_answer].concat(pregunta.incorrect_answers);
    var respuestaJugador = JSON.parse(localStorage.getItem('respuestas'))[i];

    for (let i = 0; i < 4; i++) {
        let button = document.createElement('button');
        button.setAttribute('class', 'opcion');
        div.append(button);
        button.innerHTML = respuestas[i];

        if (button.innerHTML == pregunta.correct_answer) {
            button.style['background-color'] = 'green';
        } else if (button.innerHTML == respuestaJugador) {
            button.style['background-color'] = 'red';
        }

    }
}

function evaluacion() {
    var soluciones = JSON.parse(localStorage.getItem('soluciones'));
    var respuestasJugador = JSON.parse(localStorage.getItem('respuestas'));
    var h3 = document.querySelectorAll('.soluciones h3');

    let i = 0
    while (i < 10) {
        if (soluciones[i] == respuestasJugador[i]) {
            h3[i].innerHTML = 'Pregunta ' + (i + 1) + ' &#9989 ';
        } else {
            h3[i].innerHTML = 'Pregunta ' + (i + 1) + ' &#10060 ';
        }

        i++;
    }
}
/* 
function puntuacion() {
    var soluciones = JSON.parse(localStorage.getItem('soluciones'));
    var respuestas = JSON.parse(localStorage.getItem('respuestas'));
    var contador = 0;
    for (let i = 0; i < soluciones.length; i++) {
        if (soluciones[i] == respuestas[i]) {
            console.log(soluciones[i])
            console.log(respuestas[i])
            contador++;
        }
    }
    return contador;
}

function fechaHoy() {
    var hoy = new Date(Date.now());
    return `${hoy.getDate()}/${hoy.getMonth() + 1}/${hoy.getFullYear()} ${hoy.getHours()}:${hoy.getMinutes()}`;
}

function guardarPartida() {
    var partidas = JSON.parse(localStorage.getItem('partidas'));
    var puntos = puntuacion();
    console.log(puntos);
    var fecha = fechaHoy();
    if (!partidas) {
        partidas = {
            'fechas': [fecha],
            'puntuaciones': [puntos]
        };
    } else {
        partidas.fechas.push(fecha);
        partidas.puntuaciones.push(puntos);
    }
    localStorage.setItem('partidas', JSON.stringify(partidas));
}
 */