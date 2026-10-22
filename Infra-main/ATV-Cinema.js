//readline-sync

const input = require('readline-sync');
var idade = parseInt(input.questionInt("Qual a sua idade? "));
var ValorIngresso = 0
var  PodeEntrar = true

if(idade <=12){
    ValorIngresso = 15
    console.log("O valor do ingresso é de R$" + ValorIngresso + ",00  Mas você não pode entrar, volta quando tiver barba, talvez com 21!")
}
else if(idade >=12 && idade <= 15){
    ValorIngresso = 30
    console.log("O valor do ingresso é de R$" + ValorIngresso + ",00  Mas você não pode entrar, pois é menor de idade! esse filme é de terror ")
}

else if(idade >= 16 && idade <= 60){
    ValorIngresso = 40
    console.log("O valor do ingresso é de R$" + ValorIngresso + ",00  Pode entrar, BOM FILMEEEEE!")
}
else {
    ValorIngresso = 15
    console.log("O valor do ingresso é de R$" + ValorIngresso + ",00  Pode entrar, espero que consiga terminar o filme!")
}