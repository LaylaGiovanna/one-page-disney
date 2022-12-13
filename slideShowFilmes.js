'use strict';

const imagesFilmes = [
    { 'id' : '1', 'url': './img/Desencantada-capa.png'},
    { 'id' : '2', 'url': './img/wakanda-capa.png'},
    { 'id' : '3', 'url': './img/encanto-capa.png' },
]




const containerItemsFilmes = document.querySelector('#container-items-filmes');

const loadImagesFilmes = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item-classicos'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImagesFilmes( imagesFilmes, containerItemsFilmes );

let itemsFilmes = document.querySelectorAll('.item-filmes');

const previousFilmes = () => {
    containerItems.appendChild(itemsFilmes[0]);
    itemsFilmes = document.querySelectorAll('.item-filmes');
}

const nextFilmes = () => {
    const lastItem = itemsFilmes[items.length - 1];
    containerItems.insertBefore( lastItem, itemsFilmes[0] );
    itemsFilmes = document.querySelectorAll('.item-filmes');
}

document.querySelector('#previous-filmes').addEventListener('click', previousFilmes);
document.querySelector('#next-filmes').addEventListener('click', nextFilmes);