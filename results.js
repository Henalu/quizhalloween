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

    //Resultados
    let j = 0;
    while (j < 10) {
        var pregunta = JSON.parse(localStorage.getItem('preguntas'))[j];

        var resultados = document.querySelector('#resultados');
        let div = document.createElement('div');
        div.setAttribute('class', 'soluciones');
        let h3 = document.createElement('h3');
        h3.innerHTML = 'Pregunta' + ' ' + (j + 1);
        let p = document.createElement('p');
        p.innerHTML = pregunta.question;
        div.append(h3);
        div.append(p);

        let n = 0;
        while (n < 4) {
            let button = document.createElement('button');
            button.setAttribute('class', 'opcion');
            button.append();
            div.append(button);
            n++;
        }
        resultados.append(div);
        j++;
    }

    k = 0;
    while(k<10){
        var pregunta = JSON.parse(localStorage.getItem('preguntas'))[k];
        var respuestas = [pregunta.correct_answer].concat(pregunta.incorrect_answers);
        let opciones = document.querySelectorAll('.opcion');
        console.log(respuestas);
        console.log(opciones.length);
        let i = 0;
        while (i < opciones.length) {
            opciones[i].innerHTML = respuestas[i];
            i++;
        }
        k++;
    }
    




});//fin Load