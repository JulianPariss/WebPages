const boton = document.querySelector(".buton-base");

boton.addEventListener('click',function(){
    const body = document.querySelector("body");
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const main = document.querySelector("main");
    
    boton.style.animation = "rotate-scale-up 1.5s forwards";
    body.style.animation = "gradient 2s forwards"

    body.style.visibility = "hidden";
    boton.style.visibility = "visible";

    setTimeout(function() {
        agregarTitulo(header);
        agregarFrase(footer);
        agregarFoto(main);
    },2000)
    

})

function agregarTitulo(header) {
    const tituloNodo = document.createElement("h1");
    tituloNodo.classList.add("mensaje");
    tituloNodo.innerText = "¡Feliz dia!"
    tituloNodo.style.visibility = "visible";
    header.appendChild(tituloNodo);
}

function agregarFrase(footer) {
    const tituloNodo = document.createElement("h2");
    tituloNodo.classList.add("frase");
    tituloNodo.innerText = "¡A la mejor maestra y mama del mundo!"
    tituloNodo.style.visibility = "visible";
    footer.appendChild(tituloNodo);
}

function agregarFoto(main) {
    const fotoNodo = document.createElement("img");
    fotoNodo.classList.add("imagen");
    fotoNodo.setAttribute("src","../img/mama.PNG")
    fotoNodo.style.visibility = "visible";
    main.appendChild(fotoNodo);
}