function calcularPrecioTotal(precio) {
    let margenGanancia = 1.15;
    let igv = 1.18;
    let precioTotal = precio * margenGanancia * igv;
    console.log("Precio Total: ", precioTotal);
}

calcularPrecioTotal(100);

function calcularViaje(pasajes, estadia, comida) {
    let precioTotal = pasajes + estadia + comida;
    return precioTotal;
}

let resultado = calcularViaje(100, 50, 45);
console.log("Resultado: ", resultado);


let bebida = "Coca Cola";

function grupoPizza(){
    let aperitivo = "Papas a la Huancaina";
    console.log(`voy a tomar algo de ${bebida}`);
    console.log(`voy a comer ${aperitivo}`);
}

grupoPizza();
//console.log(`yo tambien deseo ${aperitivo}`);

function picarVegetales(){
    console.log("picando Vegetales");
}

function granearArroz(){
    console.log("graneando arroz");
}

function freirPolloYHuevo(){
    console.log("freir pollo y huevos");
}

function prepararArrozConPollo(paso1,paso2,paso3){
    paso1();
    paso2();
    paso3();
}

prepararArrozConPollo(picarVegetales,granearArroz,freirPolloYHuevo);

console.log(`Estamos en el mes numero ${mes}`)

var mes = 1;

saludo()

function saludo(){
    console.log("Hola");
}

let despedida = (nombre) =>{
    console.log(`Hasta luego ${nombre}`);
}

despedida("Juan");