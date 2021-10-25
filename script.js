let setaEsq = document.querySelector('.seta-esq')
let setaDir = document.querySelector('.seta-dir')

setaEsq.addEventListener('click', mudaImgEsq)
setaDir.addEventListener('click', mudaImgDir)

function mudaImgDir() {
    let img = document.getElementsByTagName('img')
    let imgMain = document.querySelector('.img-visivel img')

    switch (imgMain.src) {
        case img[1].src:
            imgMain.src = img[2].src
            break;
        case img[2].src:
            imgMain.src = img[3].src
            break;
        case img[3].src:
            imgMain.src = img[1].src
            break;
    
        default:
            alert('[ERRO] alguma coisa inesperada aconteceu!')
            break;
    }
}

function mudaImgEsq() {
    let img = document.getElementsByTagName('img')
    let imgMain = document.querySelector('.img-visivel img')

    switch (imgMain.src) {
        case img[1].src:
            imgMain.src = img[3].src
            break;
        case img[3].src:
            imgMain.src = img[2].src
            break;
        case img[2].src:
            imgMain.src = img[1].src
            break;
    
        default:
            alert('[ERRO] alguma coisa inesperada aconteceu!')
            break;
    }
   
}
