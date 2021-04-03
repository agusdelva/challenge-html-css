const title = document.getElementById('title');
const atras = document.getElementById('img-atras');
const adelante = document.getElementById('img-adelante');
const img = document.getElementById('img');
const parrafo = document.getElementById('parrafo');
const precio = document.getElementById('precio');
const contenedor = document.getElementById('content__circles');

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

    const [...inputs] = contenedor.children
    if(e.target == atras){
        if(i>0){
            inputs[i - 1].checked = true;
            title.textContent = datos[i - 1].titulo;
            img.setAttribute('src', datos[i - 1].imagen);
            parrafo.textContent = datos[i - 1].parrafo;
            precio.textContent = datos[i - 1].precio;
            i--;
        }else{
            inputs[datos.length-1].checked = true;
            title.textContent = datos[datos.length-1].titulo;
            img.setAttribute('src', datos[datos.length-1].imagen);
            parrafo.textContent = datos[datos.length-1].parrafo;
            precio.textContent = datos[datos.length-1].precio;
            i = datos.length-1
        }
    } else if( e.target == adelante) {
        if(i<datos.length-1){
            inputs[i + 1].checked = true;
            title.textContent = datos[i + 1].titulo;
            img.setAttribute('src', datos[i + 1].imagen);
            parrafo.textContent = datos[i + 1].parrafo;
            precio.textContent = datos[i + 1].precio;
            i++;
        } else {
            inputs[0].checked = true;
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


// console.log(contenedor);
const changeDatos = (contenedor) => {
    contenedor.addEventListener("change", e => {
        const circle = e.target.id
        switch(circle) {
        case 'circle-1':
            img.setAttribute('src',datos[0].imagen)
            title.textContent = datos[0].titulo;
            parrafo.textContent = datos[0].parrafo;
            precio.textContent = datos[0].precio;
            i = 0;
            break;

        case 'circle-2':
            img.setAttribute('src',datos[1].imagen)
            title.textContent = datos[1].titulo;
            parrafo.textContent = datos[1].parrafo;
            precio.textContent = datos[1].precio;
            i = 1;
            break;

        case 'circle-3':
            img.setAttribute('src',datos[2].imagen)
            title.textContent = datos[2].titulo;
            parrafo.textContent = datos[2].parrafo;
            precio.textContent = datos[2].precio;
            i = 2;
            break;

        case 'circle-4':
            img.setAttribute('src',datos[3].imagen)
            title.textContent = datos[3].titulo;
            parrafo.textContent = datos[3].parrafo;
            precio.textContent = datos[3].precio;
            i = 3;
            break;

        default:
            img.setAttribute('src', datos[0].imagen)
            title.textContent = datos[0].titulo;
            parrafo.textContent = datos[0].parrafo;
            precio.textContent = datos[0].precio;
            i = 0;
            break;
        }
    })
}

document.addEventListener('click', (e) => {
    changeDatos(contenedor)
})



