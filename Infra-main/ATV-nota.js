//Atividade  aluno reprovado ou não!

const input = require('readline-sync')

var nota = 0
for (let i = 1; i <= 3; i++) {
    nota += parseInt(input.question("Qual a sua nota? "))
}
var frequencia = parseInt(input.question("Qual a sua frequencia?(De 0 a 100%): "))
var projetoIntegrador = parseInt(input.question("Você entregou o projeto integrador?(s/n): "))
var notaFinal = nota/3


if (notaFinal >=7){
    frequencia >= 75
    projetoIntegrador == "s"
    console.log("Aluno aprovado! Mues Parabens!\nfoi sorte " + notaFinal)
    console.log("Sua frequencia esta em dia Parabens!"+ frequencia +"%")
    console.log("Você entregou o projeto integrador! Parabens!")
}
else if (notaFinal >= 7){
    frequencia <=74
    projetoIntegrador == "n"
    console.log("Aluno reprovado!\nprecisa se esforçar mais " + notaFinal)
    console.log("Sua frequencia esta baixa! tá gazeando muito, viu!"+ frequencia +"%")
    console.log("fez o'que que não apresentou o projeto em!")
}

else if (notaFinal < 7){
    frequencia <= 74
    projetoIntegrador == "n"
    console.log("Nem tentar, você foi reprovado! " + notaFinal)
    console.log("Você é novato?! sua frequencia esta baixa: " + frequencia +"%")
    console.log("Não apresentou o PI também?!! HAHAHAHAHA!!!\ntu é massa!")

    }
    
else{
        console.log("Vai falar com o professor!\nNão acho que tenhas salvação!")
    }