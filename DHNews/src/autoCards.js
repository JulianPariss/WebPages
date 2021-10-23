

let divContenedor = document.querySelector('.noticias');
function renderizarItems() {
     for (let i = 0; i  < noticias.length; i++) {
        const nodoCard = document.createElement('div');
        const nodoDiv = document.createElement('div');
        nodoDiv.classList.add('items')
        nodoCard.classList.add('card');
        if (noticias[i].tipoNacional) {
            nodoCard.classList.add('nacional')
        } else {nodoCard.classList.add('internacional')}

        //Adding title node
        const nodoH2 = document.createElement('h2');
        nodoH2.innerText = noticias[i].titulo;
        //-----------------

        //Adding img node
        const nodoImg = document.createElement('img');
        nodoImg.setAttribute('src',noticias[i].imgUrl);
        nodoImg.setAttribute('alt',noticias[i].titulo);
        //---------------

        //Adding description node
        const nodoText = document.createElement('p');
        nodoText.innerText = noticias[i].descripcion;
        //-----------------------

        //Adding conteiner node
        const nodoDescripcionYTitulo = document.createElement('div');
        nodoDescripcionYTitulo.appendChild(nodoH2);
        nodoDescripcionYTitulo.appendChild(nodoText);
        //---------------------

        //Render
        nodoDiv.appendChild(nodoDescripcionYTitulo);
        nodoDiv.appendChild(nodoImg);
        nodoCard.appendChild(nodoDiv);
        divContenedor.appendChild(nodoCard);
     }
}


renderizarItems();