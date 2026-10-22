let valorAtual = 0
const elementoContador = document.getElementById('contador')

function atualizar() {
    elementoContador.textContent = valorAtual

    if(valorAtual < 0) {
        elementoContador.style.color = '#1cd8dffb'
}   else if(valorAtual > 0) {
        elementoContador.style.color = '#6818e9fb'
}   else {
   }   elementoContador.style.color = '#000000'
}

function diminuir() {
    valorAtual--
    atualizar()
}
function aumentar() {
    valorAtual++
    atualizar()
}
function zerar() {
    valorAtual = 0
    atualizar()
}

diminuir()
aumentar()
zerar()