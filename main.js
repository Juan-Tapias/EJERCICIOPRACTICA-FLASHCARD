const pregunta = document.getElementById("pregunta")
const respuesta = document.getElementById("respuesta")
const btnGuardar = document.getElementById("guardar")
const cerrarVenta = document.querySelector(".contenedor")
const btnCerrar = document.getElementById("cerrar")
const btnBorrar = document.getElementById("limpiar")
let preguntas = 1
function generarRespuesta(p) {
    const mostrar = p.nextElementSibling;

    if (mostrar.style.display === "block") {
        mostrar.style.display = "none";
        mostrar.style.opacity = 0;
    } else {
        mostrar.style.display = "block";
        mostrar.style.opacity = 1;
    }
}
function cerrarVentana(){
    if(cerrarVenta.style.display === "flex"){
        cerrarVenta.style.display = "none"
        cerrarVenta.style.opacity = 0;
        btnCerrar.textContent = "Abrir"
        pregunta.value = ""
        respuesta.value = ""
    } else {
        cerrarVenta.style.display = "flex"
        cerrarVenta.style.opacity = 1;
        btnCerrar.textContent = "Cerrar"
    }
}
btnBorrar.addEventListener("click", ()=>{
    const div = document.querySelector(".container-flash-card")
    div.innerHTML = ""
    preguntas = 1
})
btnGuardar.addEventListener("click", ()=>{
    if (!pregunta.value || !respuesta.value){
        alert("Escriba una pregunta o respuesta")
    }else{
        const div = document.querySelector(".container-flash-card")
        let flashCard = document.createElement("div")
        flashCard.classList.add("container-respuesta")
        flashCard.innerHTML = `
        <h2>Pregunta #${preguntas}</h2> 
        <p class="pregunta" onclick="generarRespuesta(this)">${pregunta.value}</p>
        <p style="display: none; opacity: 0;" id="respuesta-oculta"><b>${respuesta.value.toUpperCase()}</b></p>
        `
        div.appendChild(flashCard)
        preguntas += 1;
        pregunta.value = ""
        respuesta.value = ""
    }
})