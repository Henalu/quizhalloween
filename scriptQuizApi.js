window.onload = () => {
    document.getElementsByClassName('pregunta')[0].style.display = 'none';
    document.getElementsByClassName('pregunta')[2].style.display = 'flex';
    localStorage.setItem('contador', JSON.stringify(0));
    localStorage.setItem('respuestas', JSON.stringify([]));
    localStorage.setItem('soluciones', JSON.stringify([]));
}
function dificultad(i) {
    document.getElementsByClassName('pregunta')[2].style.display = 'none';
    document.getElementsByClassName('pregunta')[0].style.display = 'flex';
    switch(i) {
        case 0:
            //https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple
            break;
        case 1:
            //https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple
            break;
        case 2:
            //https://opentdb.com/api.php?amount=10&difficulty=hard&type=multiple
            break;
    }
}
