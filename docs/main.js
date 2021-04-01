const imagenes = ['assets/image-25.png','assets/imagen-silla-gris.jpg','assets/sillon-gris.png']

let cont = 0;

const carrousel = (contenedor) => {
    contenedor.addEventListener('click', e => {
        let atras = contenedor.querySelector('#img-atras');
        let adelante = contenedor.querySelector('#img-adelante');
        let img = document.getElementById('img-main');
        let tgt = e.target;

            if(tgt == atras){
                if(cont > 0){
                    img.src = imagenes[cont -1];
                    cont--;
                } else {
                    img.src = imagenes[imagenes.length - 1];
                    cont = imagenes.length -1;
                }
            } else if (tgt == adelante){
                if(cont < imagenes.length - 1) {
                    img.src = imagenes[cont + 1];
                    cont ++;
                } else {
                    img.src = imagenes[0];
                    cont = 0;
                }
            }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.content__flechas')

    carrousel(contenedor);
})

