let opcion =  1;
let pelicula = "Comedia";

switch (opcion) {
    case 1:
        console.log("Opción 1");
        break;
    case 2:
        console.log("Opción 2");
        break;
    case 3:
        console.log("Opción 3");
        break;
    default:
        console.log("Opción no válida");
        break;
}

switch(true){
    case (pelicula === "Comedia" && opcion === 1):
        console.log("Elegiste la opcion 1 con La Mascara");
        break;
    case (pelicula === "Terror" && opcion === 2):
        console.log("Elegiste la opcion 2 con El Aro");
        break;
    case (pelicula === "Accion" && opcion === 3):
        console.log("Elegiste la opcion 3 con Rápido y Furioso");
        break;
    default:
        console.log("Opción no válida");
        break; 
}