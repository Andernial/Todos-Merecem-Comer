var modalNordeste = document.getElementById("nordeste")
var modalNorte = document.getElementById("norte")
var modalCentroOeste = document.getElementById("centro_oeste")
var modalSudeste = document.getElementById("sudeste")
var modalSul = document.getElementById("sul")


var modalNE = document.getElementById("modal-nordeste")
var modalNO = document.getElementById("modal-norte")
var modalCO = document.getElementById("modal-centro-oeste")
var modalSD = document.getElementById("modal-sudeste")
var modalS = document.getElementById("modal-sul")

var closeModalNordeste = document.getElementById("close-modal-ne")
var closeModalNorte = document.getElementById("close-modal-no")
var closeModalCentroOeste = document.getElementById("close-modal-co")
var closeModalSudeste = document.getElementById("close-modal-sd")
var closeModalSudeste = document.getElementById("close-modal-sd")
var closeModalSul = document.getElementById("close-modal-sul")

const botao = document.querySelectorAll(".more-ongs")

for (let i = 0; i < botao.length; i++) {
    botao[i].addEventListener('click', () =>{
        document.location.href = "/Iniciativas.html"
    })
    
}

modalNordeste.addEventListener("click", () => {
    modalNE.style.display = "flex"
})

modalNorte.addEventListener("click", () => {
    modalNO.style.display = "flex"
})

modalCentroOeste.addEventListener("click", () => {
    modalCO.style.display = "flex"
})

modalSudeste.addEventListener("click", () => {
    modalSD.style.display = "flex"
})

modalSul.addEventListener("click", () => {
    modalS.style.display = "flex"
})




closeModalNordeste.addEventListener("click", () => {
    modalNE.style.display = "none"
})

closeModalNorte.addEventListener("click", () => {
    modalNO.style.display = "none"
})

closeModalCentroOeste.addEventListener("click", () => {
    modalCO.style.display = "none"
})

closeModalSudeste.addEventListener("click", () => {
    modalSD.style.display = "none"
})

closeModalSul.addEventListener("click", () => {
    modalS.style.display = "none"
})


window.addEventListener("click", (e) =>{
    if(e.target == modalNE){
        modalNE.style.display = "none"
    } else if (e.target == modalNO){
        modalNO.style.display = "none"
    } else if (e.target == modalCO){
        modalCO.style.display = "none"
    } else if (e.target == modalSD){
        modalSD.style.display = "none"
    } else if (e.target ==modalS){
        modalS.style.display = "none"
    }
}) 