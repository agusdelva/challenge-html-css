const title = document.getElementById('title');
const atras = document.getElementById('img-atras');
const adelante = document.getElementById('img-adelante');
const img = document.getElementById('img');
const parrafo = document.getElementById('parrafo');
const precio = document.getElementById('precio');

let ids = []

const datos = [
    {titulo: 'Sillon Celeste',parrafo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', imagen:'./assets/image-25.png',precio:'$1,564'},
    {titulo: 'Sillon Gris',parrafo:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, nemo', imagen:'./assets/sillon-gris.png',precio:'$1,589'},
    {titulo: 'Sillon Marron',parrafo:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non esse odio vero qui hic obcaecati', imagen:'./assets/sillon-oscuro.jpg',precio:'$1,594'},
    {titulo: 'Silla Rosa',parrafo:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam non in aliquam, nisi quibusdam magni quia nam repudiandae atque eveniet', imagen:'./assets/sillon-rosa.jpg',precio:'$1,364'},
]

document.addEventListener("DOMContentLoaded", function(e){
    title.textContent = datos[0].titulo;
    img.setAttribute('src', datos[0].imagen);
    parrafo.textContent = datos[0].parrafo;
    precio.textContent = datos[0].precio;
})

let i = 0;

const slider = (e) => {
    if(e.target == atras){
        if(i>0){
            title.textContent = datos[i - 1].titulo;
            img.setAttribute('src', datos[i - 1].imagen);
            parrafo.textContent = datos[i - 1].parrafo;
            precio.textContent = datos[i - 1].precio;
            i--;
        }else{
            title.textContent = datos[datos.length-1].titulo;
            img.setAttribute('src', datos[datos.length-1].imagen);
            parrafo.textContent = datos[datos.length-1].parrafo;
            precio.textContent = datos[datos.length-1].precio;
            i = datos.length-1
        }
    } else if( e.target == adelante) {
        if(i<datos.length-1){
            title.textContent = datos[i + 1].titulo;
            img.setAttribute('src', datos[i + 1].imagen);
            parrafo.textContent = datos[i + 1].parrafo;
            precio.textContent = datos[i + 1].precio;
            i++;
        } else {
            title.textContent = datos[0].titulo;
            img.setAttribute('src', datos[0].imagen);
            parrafo.textContent = datos[0].parrafo;
            precio.textContent = datos[0].precio;
            i = 0;
        }
    }
}

atras.addEventListener('click', slider )
adelante.addEventListener('click', slider)

const contenedor = document.getElementById('content__circles');

// console.log(contenedor);
const changeDatos = (contenedor) => {
    contenedor.addEventListener("change", e => {
        const circle = e.target.id
        switch(circle) {
        case 'circle-1':
            img.setAttribute('src',datos[0].imagen)
            break;

        case 'circle-2':
            img.setAttribute('src',datos[1].imagen)
            break;

        case 'circle-3':
            img.setAttribute('src',datos[2].imagen)
            break;

        case 'circle-4':
            img.setAttribute('src',datos[3].imagen)
            break;

        default:
            img.setAttribute('src', datos[0].imagen)
            break;
        }
    })
}

document.addEventListener('click', (e) => {
    changeDatos(contenedor)
})

// const carrousel = (contenedor) => {
//     contenedor.addEventListener('click', e => {
//         let atras = contenedor.querySelector('#img-atras');
//         let adelante = contenedor.querySelector('#img-adelante');
//         let img = document.getElementById('img-main');
//         let tgt = e.target;


//             if(tgt == atras){
//                 if(cont > 0){
//                     img.src = imagenes[cont -1];
//                     cont--;
//                 } else {
//                     img.src = imagenes[imagenes.length - 1];
//                     cont = imagenes.length -1;
//                 }
//             } else if (tgt == adelante){
//                 if(cont < imagenes.length - 1) {
//                     img.src = imagenes[cont + 1];
//                     cont ++;
//                 } else {
//                     img.src = imagenes[0];
//                     cont = 0;
//                 }
//             }
//     })
// }

// document.addEventListener("DOMContentLoaded", () => {
//     let contenedor = document.querySelector('.content__flechas')

//     carrousel(contenedor);
// })

//pruebas inputs


