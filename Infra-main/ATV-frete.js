const input = require('readline-sync')
var frete = 0
var valorTotal = 0
var regiao =  (input.question("Qual a regiao que voce mora? "))
var valorProduto = (input.questionInt("Qual o valor do produto? "))
var prazoEntrega = 0

if (regiao == "Sul" || regiao == "suldeste"){
   if(valorProduto >= 150){
    frete = 0
    valorTotal = valorProduto + frete
    console.log("o Valor final do pedido é R$" + valorTotal + ",00" )
    console.log("O prazo de entrega é de 2 dias úteis")
   }

    else{
    frete = 15
    valorTotal = valorProduto + frete
    console.log("o Valor final do pedido é R$" + valorTotal + ",00" )
    console.log("O prazo de entrega é de 2 dias úteis")
}}

else if (regiao == "norte" || regiao == "nordeste"){
    if (valorProduto >= 250){
    frete = 0 
    console.log("O valor do pedido é R$" + valorProduto + ",00" )
    console.log("O prazo de entrega é de 5 dias úteis")
    }

    else{
    frete = 35
    valorTotal = valorProduto + frete
    console.log("o Valor final do pedido é R$" + valorTotal + ",00" )
    console.log("O prazo de entrega é de 5 dias úteis")
}}

else if (regiao == "centro-oeste" || regiao == "Acre" ){
    if(valorProduto >= 300){
    frete = 0
    console.log("o Valor final do pedido é R$" + valorProduto + ",00" )
    console.log("O prazo de entrega é de 7 dias úteis")
    }

    else{
    frete = 35
    valorTotal = valorProduto + frete
    console.log("o Valor final do pedido é R$" + valorTotal + ",00" )
    console.log("O prazo de entrega é de 7 dias úteis")
}}
