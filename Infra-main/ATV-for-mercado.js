const carrinho = ["cevada", "agua", "bolo de rolo", "Futurinhos black", "leite"];

for (var i = 0; i < carrinho.length; i++) {
    if (carrinho[i] == "Futurinhos black") {
        console.log("Finalmente a futurinhos ganhou!!!");
    }

    else {
    console.log("Tem mais acabou!");
    break;
}
}

const notasAlunos = [10, 7, 7, 5, 3, 8];

for (var j = 0; j < notasAlunos.length; j++) {
    if (notasAlunos[j] >= 7) {
        console.log("As maiores notas da sala são: " + notasAlunos[j]);
    }
}

const temperetura = [25, 30, 45, 35, 18, 16];

for (var g = 0; g < temperetura.length; g++) {
    if (temperetura[g] >= 45) {
        console.log("Alerta! hoje está fazendo " + temperetura[g] + "°C");
    }
}