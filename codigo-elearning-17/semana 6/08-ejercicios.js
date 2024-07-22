let montoALlevar = prompt("Cuanto llevara el cliente?");
console.log(montoALlevar);
console.log(typeof montoALlevar);

let montoNumerico = parseInt(montoALlevar);
console.log("monto numerico", montoNumerico);
console.log("tipo monto numerico", typeof montoNumerico);

let descuento = 0;
let IGV = 0.18;

//let montoALlevar = 500;

if(montoALlevar > 300){
    descuento=60;//console.log("mayor a 100");
}else if(montoALlevar > 150){
    descuento = 20;
}else if(montoALlevar > 100){
    descuento = 5;
}else{
    console.log("No hay descuento");
}

let Total = (montoALlevar - descuento)*(1+IGV);
console.log(`El total a pagar es: ${Total} con un descuento de ${descuento}`);
