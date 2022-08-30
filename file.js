/*Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.*/

console.log('JS OK!')

// creiamo l'array con le immagini


// container dove iscrivere le nostre stringe con le classi delle immagini



// dobbiamo creare il ciclo per far si che all'evento click le immagini nel carousel cambino
// oltre al ciclo stiamo creando il meccanismo di assegnazione delle stringhe concatenate per definire gli elementi

// const activeClass = document.querySelector('item')
// activeClass.className.add('active')
// funzione con array
// for (let i = 0; i < imgArray.length; i++) {
//     const itemClass = imgArray[i];
//     containerCarosel.innerHTML += '<img class="img-fluid item col-12" src="./img/' + itemClass + '.jpg" alt="Foto Carousel">'

// }
// const elementActive = this.querySelector('.item')
// elementActive.classList.add('active')









/* nextImg.addEventListener('click',
    function () {
        // funzione senza array 
        console.log('mi hai cliccato')
        const firstImg = document.querySelector('.active')
        console.log(firstImg)
        const nextImg = firstImg.nextElementSibling
        console.log(nextImg)

        if (nextImg) {
            firstImg.classList.remove('active')
            nextImg.classList.add('active')
        }



    }

)*/


// Creo l'array

const imgArray = ['01', '02', '03', '04', '05']



// inserisco il contenuto all'interno dell'html
const containerCarosel = document.querySelector('.carousel-img')
containerCarosel.innerHTML = ''

// l'ammaggine che deve vedersi in default è la prima  dell'arrey

let firstImg = 0;
console.log(imgArray[firstImg])

for (let i = 0; i < imgArray.length; i++) {

    console.log(imgArray[i])
    let activeClass = '';
    if (i === firstImg) {
        activeClass = 'active';
    }
    console.log(activeClass)
    containerCarosel.innerHTML += `<img class="img-fluid item ${activeClass} col-12" src="./img/${imgArray[i]}.jpg" alt="Foto Carousel"></img>`

}


const nextImgButton = document.getElementById('next')
nextImgButton.addEventListener('click', function () {
    console.log('mi hai cliccato')

    if (firstImg < imgArray.length - 1) {
        firstImg++;
    } else {
        firstImg = 0;
    }
    containerCarosel.innerHTML = ''

    for (let i = 0; i < imgArray.length; i++) {

        console.log(imgArray[i])
        let activeClass = '';
        if (i === firstImg) {
            activeClass = 'active';
        }
        console.log(activeClass)
        containerCarosel.innerHTML += `<img class="img-fluid item ${activeClass} col-12" src="./img/${imgArray[i]}.jpg" alt="Foto Carousel"></img>`

    }
})


const previousImgButton = document.getElementById('previous')

previousImgButton.addEventListener('click', function () {
    if (firstImg > 0) {
        firstImg--;

    } else {
        firstImg = imgArray.length - 1
    }
    containerCarosel.innerHTML = ''

    for (let i = 0; i < imgArray.length; i++) {

        console.log(imgArray[i])
        let activeClass = '';
        if (i === firstImg) {
            activeClass = 'active';
        }
        console.log(activeClass)
        containerCarosel.innerHTML += `<img class="img-fluid item ${activeClass} col-12" src="./img/${imgArray[i]}.jpg" alt="Foto Carousel"></img>`

    }


})

