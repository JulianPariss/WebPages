let lista =  document.querySelectorAll('li');

setInterval(function(){ cambiarTema(); }, 30);

function cambiarTema () {
    let lista = document.querySelectorAll('li');
    
    lista.forEach(element => {
        element.classList.toggle("blackTemeLi")
    });

    let body = document.querySelector('body');
    body.classList.toggle("blackTemeBody")

    let boton = document.getElementById('tema');
    boton.classList.toggle("blackTemeLi");

}
