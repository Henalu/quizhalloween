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


    //Efecto Bombilla
    var happyFace = document.querySelector('#happyFace');
    happyFace.style.cursor = 'pointer';

    var bombilla = document.querySelector('#bombilla');
    bombilla.style.visibility = 'hidden';

    happyFace.addEventListener('mouseover', () => {
        bombilla.style.visibility = 'visible'
    });
    happyFace.addEventListener('mouseout', () => {
        bombilla.style.visibility = 'hidden'
    });

    var atrevete = document.querySelector('#atrevete');
    atrevete.style.cursor = 'pointer';
    atrevete.addEventListener('mouseover', () => {
        bombilla.style.visibility = 'visible'
    });
    atrevete.addEventListener('mouseout', () => {
        bombilla.style.visibility = 'hidden'
    });

    //Grafica
    var partidas = JSON.parse(localStorage.getItem('partidas'));

    const data = {
        labels: partidas.fechas,
        datasets: [{
            label: 'Últimas partidas',
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(255, 159, 64, 0.8)',
                'rgba(255, 205, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(201, 203, 207, 0.8)'
              ],
            borderColor: 'rgb(255, 99, 132)',
            data: partidas.puntuaciones,
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {}
    };

    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );


});//fin Load

