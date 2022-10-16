window.addEventListener('load', () => {
    //Funcion para desabilitar el Scroll
    function disableScroll(){  
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

    atrevete.addEventListener('click', ()=>{

    });



});//fin Load