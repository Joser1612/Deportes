const modal = document.getElementById("modal")
const inicia_sesion = document.getElementById("inicia_sesion")
const close_modal = document.getElementById("close_modal")

inicia_sesion.addEventListener('click',()=>{
    modal.setAttribute('open', 'true')
})
close_modal.addEventListener('click', ()=>{
    modal.removeAttribute('open')
})

