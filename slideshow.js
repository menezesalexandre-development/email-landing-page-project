var i = 0;
var images = [];
var time = 2000;

//LISTA DE IMAGENS
images[0] = './img/facebook-55.png';
images[1] = './img/whatsapp-55.png';
images[2] = './img/instagram-55.png';

//TROCA DE IMAGEM
function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time)
}

window.onload = changeImg;
