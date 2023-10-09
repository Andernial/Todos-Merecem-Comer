const botãoHamburguer = document.querySelector('.botao-lista')
const nav = document.querySelector('.nav')

botãoHamburguer.addEventListener('click', ()=>{
    nav.classList.toggle('active')
})