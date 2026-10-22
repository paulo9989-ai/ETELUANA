//Exercício: O Verificador de Beco e Cinema
const input = require('readline-sync');
var idade = parseInt(input.questionInt("Qual a sua idade? "));


var ingreço = true
var idade = 16

if (ingreço == true && idade >= 18){
    console.log("Pode entrar, Tenha um bom filme!")
}

else if (ingreço == false || idade < 18) {
    console.log("Opa! Esse filme não é para você, vai assistir pepa pig!")
}

else{(ingreço == false || idade >= 60)
    console.log("FIlmaço em! Soube que ele morre no final!")

}
