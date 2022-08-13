//Objeto características de cada signo

class signoCaracteristicas {

    constructor (nombre,elemento,fechas,rasgos){
        this.nombre = nombre;
        this.elemento = elemento;
        this.fechas = fechas;
        this.rasgos = rasgos;
    } 
    mostrar_listado(){
        return ("Signo: " + this.nombre + " - Elemento: " + this.elemento + " - Son regidos por este signo los nacidos entre: " + this.fechas + " Su principales caratrísticas son: " + this.rasgos + ".");
    }
    
}

//Arrays de características de cada signo

let aries= new signoCaracteristicas ("Aries","Fuego", "el 21 de marzo y el 20 de abril.", "cabrones, tensos y les gusta el helado de menta granizada");
let tauro= new signoCaracteristicas ("Tauro","Tierra", "el 21 de abril y el 21 de mayo." , "anfitriones, dormilones y fanáticos de Buffy la Cazavampiros");
let geminis = new signoCaracteristicas ("Géminis", "Aire", "el 22 de mayo y el 20 de junio.", "dubitativos, charlatanes y amantes de los perros salchicha");
let cancer = new signoCaracteristicas ("Cáncer", "Agua","el 21 de junio y el 20 de julio.", "caseros, leales y coleccionistas de pitutos");
let leo = new signoCaracteristicas ("Leo", "Fuego", "el 22 de julio y el 20 de agosto.", "egolatras, amigueros y organizadores de previas");
let virgo = new signoCaracteristicas ("Virgo", "Tierra","el 21 de agosto y el 21 de septiembre.", "metódicos, ordenados y adoradores del cif");
let libra = new signoCaracteristicas ("Libra", "Aire", "el 22 de septiembre y el 21 de octubre.", "colgados, justos y lectores de Gaturro");
let escorpio = new signoCaracteristicas ("Escorpio", "Agua", "el 22 de octubre y el 21 de noviembre.", "oscuros, solitarios y fundamentalistas del aire acondicionado");
let sagitario = new signoCaracteristicas ("Sagitario", "Fuego","el 22 de noviembre y el 21 de diciembre", "viajeros, inquietos y conocedores de buenos vinos");
let capricornio = new signoCaracteristicas ("Capricornio", "Tierra","el 22 de diciembre y el 20 de enero", "obstinados, obsesivos y fans de la picada");
let acuario = new signoCaracteristicas ("Acuario", "Aire", "el 21 de enero y el 20 de febrero", "alocados, temperamentales y amantes de la radio Aspen");
let piscis = new signoCaracteristicas ("Piscis", "Agua", "el 21 de febrero y el 20 de marzo", "sensibles, llorones y grandes acróbatas");


