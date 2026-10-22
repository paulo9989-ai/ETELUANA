const input = require('readline-sync')

var produto = input.question("Qual produto você deseja comprar? ")

switch (produto) {
    case "1":
        console.log("Produto 1: Vodka");
        break;
    case "2":
        console.log("Produto 2: Televisão");
        break;
    case "3":
        console.log("Produto 3: alho frito");
        break;
    case "4":
        console.log("Produto 4: chapinha");
        break;
    case "5":
        console.log("Produto 5: gift card");
        break;
    case "6":
        console.log("Produto 6: playstation");
        break;
    default:
        console.log("Produto não encontrado.");
}