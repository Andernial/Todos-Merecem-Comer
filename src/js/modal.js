var modalNordeste = document.getElementById("nordeste")
var modal = document.getElementById("modal-nordeste")
var closeModal = document.getElementById("close-modal")


modalNordeste.addEventListener("click", () => {
    modal.style.display = "flex"
})

closeModal.addEventListener("click", () => {
    modal.style.display = "none"
})

window.addEventListener("click", (e) =>{
    if(e.target == modal){
        modal.style.display = "none"
    }
})