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
    
    //mostramos los resultados
    muestraResultados();
});//fin Load

function muestraResultados() {
    var preguntas = JSON.parse(localStorage.getItem('preguntas'));
    for(let i = 0; i < preguntas.length; i++) {
        pintaDivPregunta(i, preguntas);
    } 
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
    for(let i = 0; i < 4; i++) {
        let button = document.createElement('button');
        div.append(button);
        button.innerHTML = respuestas[i];
    }
}