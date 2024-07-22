let arraAlumnos = ["Juan", "Pedro", "Maria", "Luis", "Ana"];

console.log("cant. estudiantes",arraAlumnos.length);

//let contador = 0
//while(contador <= arraAlumnos.length){
    //console.log("Presente");
    //contador = contador + 1;
    //console.log("contador",contador);
//}

/*let contador = 20000;
do{
    console.log("Presente");
    contador = contador + 1;
    console.log("contador",contador);
}while (contador< arraAlumnos.length)

let esVerdad = false;    
do{
    let meQuiere = prompt("¿Me quieres?");
    console.log("Si me quiere?",meQuiere);
    if(meQuiere === "si"){
        esVerdad = true;
    }else{
        esVerdad = false;
    }
}while(esVerdad === true);*/

/*for(let i = 0; i < 5; i= i + 1){
    console.log("Iterador ", i)
}*/

let cantidadDeNinosEsperada = 10;

for(let i = 0; i <= cantidadDeNinosEsperada; i++){
    console.log(`Niño Numero ${i} ven aqui`, i);
}
console.log("Tengo la clase completa");

let cont = 0;
while(cont <5){
    console.log(`estoy funcionando ${cont}`);
    cont = cont + 1;
}
