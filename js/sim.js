//Modificación del HTML por DOM

let h1 = document.getElementById("tituloUno");
h1.textContent = "¿Cuál es tu fortuna?";

let h2 = document.getElementById("tituloDos");
h2.textContent = "Elige tu signo y Madame LeFortune te contará qué te espera ";

let p = document.getElementById ("disclaimer")
p.textContent = "Disclaimer: Este sitio es sólo diversión, ningún signo del zodíaco fue maltratado durante su construcción."


let imgAries = document.getElementById("imgAries");
imgAries.setAttribute("src","./img/aries.png");
imgAries.setAttribute("alt", "Aries");

let imgTauro = document.getElementById("imgTauro");
imgTauro.setAttribute("src","./img/tauro.png");
imgTauro.setAttribute("alt", "Tauro");

let imgGeminis = document.getElementById("imgGeminis");
imgGeminis.setAttribute("src","./img/geminis.png");
imgGeminis.setAttribute("alt", "Geminis");

let imgCancer = document.getElementById("imgCancer");
imgCancer.setAttribute("src","./img/cancer.png");
imgCancer.setAttribute("alt", "Cáncer");

let imgLeo = document.getElementById("imgLeo");
imgLeo.setAttribute("src","./img/leo.png");
imgLeo.setAttribute("alt", "Leo");

let imgVirgo = document.getElementById("imgVirgo");
imgVirgo.setAttribute("src","./img/virgo.png");
imgVirgo.setAttribute("alt", "Virgo");

let imgLibra = document.getElementById("imgLibra");
imgLibra.setAttribute("src","./img/libra.png");
imgLibra.setAttribute("alt", "Aries");

let imgEscorpio = document.getElementById("imgEscorpio");
imgEscorpio.setAttribute("src","./img/escorpio.png");
imgEscorpio.setAttribute("alt", "Escorpio");

let imgSagitario = document.getElementById("imgSagitario");
imgSagitario.setAttribute("src","./img/sagitario.png");
imgSagitario.setAttribute("alt", "Sagitario");

let imgCapricornio = document.getElementById("imgCapricornio");
imgCapricornio.setAttribute("src","./img/capricornio.png");
imgCapricornio.setAttribute("alt", "Capricornio");

let imgAcuario = document.getElementById("imgAcuario");
imgAcuario.setAttribute("src","./img/acuario.png");
imgAcuario.setAttribute("alt", "Acuario");

let imgPiscis = document.getElementById("imgPiscis");
imgPiscis.setAttribute("src","./img/piscis.png");
imgPiscis.setAttribute("alt", "Piscis");

//Inicio simulador

let arraySignos = [aries, tauro, geminis, cancer, leo, virgo, libra, escorpio, sagitario, capricornio, acuario, piscis];

let fortuna = true

while(fortuna){
    let mensaje = "Elige tu consulta";
    mensaje += "\n1) Horóscopo del día";
    mensaje += "\n2) Características de cada signo";
    mensaje += "\n3) No me interesa mi fortuna";

    let resp = prompt(mensaje);
    switch (resp) {

        case "1":
            horoscopo();
            break;
        case "2":
            caractericas();
            break;
        case "3":
            alert("Gracias, vuelva prontos");
            fortuna = false;
            break;
        case null:
            alert("Gracias, vuelva prontos");
            fortuna = false;
            break;
        default:
            alert("No ingreso una opcion valida");

    }
}

//Función para conocer el horóscopo según el signo
function horoscopo(){
    let zodiaco = confirm ("Madame LeFortune le da la bienveida a su horóscopo del zodíaco semanal.")
    
    while (zodiaco){
        let signoIngresado = prompt("Ingresá tu signo").toLowerCase();
        alert("Madame LeFortune dice que " + signosZodiaco(signoIngresado));
            if (zodiaco=false){
                fortuna;
            }
    }
}
    function signosZodiaco(signoUser) {
        let horoscopo
        switch (signoUser) {
            case "aries":
                horoscopo = "comerás buen jamón crudo. ";
                break;
            case "tauro":
                horoscopo = "tu inodoro quedará reluciente. ";
                break;
            case "geminis":
                horoscopo = "llamarás a tu mamá. ";
                break;
            case "géminis":
                horoscopo = "llamarás a tu mamá. ";
                break;
            case "cancer":
                horoscopo = "club día te dará un descuento en papas fritas. ";
                break;
            case "cáncer":
                horoscopo = "club día te dará un descuento en papas fritas. ";
                break;
            case "leo":
                horoscopo = "tomarás sol al mediodía. ";
                break;
            case "virgo":
                horoscopo = "te quedarás sin papel higiénico. ";
                break;
            case "libra":
                horoscopo = "ese jean te volverá a entrar. ";
                break;
            case "escorpio":
                horoscopo = "cantarás todo el día una canción de Arjona. ";
                break;
            case "sagitario":
                horoscopo = "tendrás que correr el bondi.";
                break;
            case "capricornio":
                horoscopo = "pisarás caca de perro. ";
                break;
            case "acuario":
                horoscopo = "te caerá mal ese sushi. ";
                break;
            case "piscis":
                horoscopo = "seguirás igual de hippie.";
                break;
            default:
                horoscopo = "eso no es un signo, seguí participando.";
    }
        return horoscopo
}

//Función que dispara las características de cada signo
function caractericas(){
    let mensaje = "Cada signo es disntinto, conocé cómo los ve Madame LeFortune "
    arraySignos.forEach((signoCaracteristicas) => {
    mensaje += "\n " + signoCaracteristicas.mostrar_listado();
    })

    alert(mensaje);

}