const btnModalVariable = document.getElementById("btnModal");
const ventanaModalVariable = document.getElementById("ventanamodal");

console.log(btnModalVariable);

btnModalVariable.addEventListener('click', function(){
    const modal = new bootstrap.Modal(ventanaModalVariable); // Pasar el elemento del DOM directamente
    modal.show();
})