/*console.log("Entro index.js");

let btnDanger = document.getElementById("btnDanger");

function imprimirHolaMundo() {
    alert("Hola Mundo");
}
btnDanger.addEventListener("click",() =>{
    alert("Hola mundo desde boton danger");
})*/
document.addEventListener('DOMContentLoaded', () =>{

    const saveBtn = document.getElementById("saveBtn"); 
    const ChangeThemeBtn = document.getElementById("ChangeThemeBtn"); 
    const inputName = document.getElementById("inputName"); 
    const inputPuesto = document.getElementById("inputPuesto"); 
    const tableBody = document.getElementById("tableBody"); 
    function loadData(){
        console.log("Entro a Load Data");
    }
    saveBtn.addEventListener('click', () =>{
        const name = inputName.value;
        const puesto = inputPuesto.value;
        if (name === "") {
            console.log("ingresa tu nombre por favor");
        }else{
            console.log(name);
        }
        console.log(puesto);
        let empleado = JSON.parse(localStorage.getItem("empleado")) || [];
        empleado.push({
            name,
            puesto
        });
        localStorage.setItem(empleado, JSON.stringify(empleado));
    });
    loadData();
});