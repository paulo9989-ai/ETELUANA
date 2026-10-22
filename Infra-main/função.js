
//função

function sum (a, b) {
  var soma = a + b;
  console.log("o resultado é: " + soma);
}

sum (12, 2)
sum (10, 8)
// função sem parametros

function ola(){
    console.log("Olá, Sou o deus desse mundo!")
}

ola()

//função dentro da função

function olapessoa(pessoa){
   ola ()
    console.log(pessoa + " é o deus desse mundo!")
}
olapessoa("Gabriel Alves")


//ex:. criar um função

function nome(pessoa){
    console.log("Meu nome é " + pessoa);
}
nome("Gabriel Alves")

function god(pessoa){
   var nomePessoa = nome(pessoa);
    console.log(pessoa +" é o deus desse mundo? ")
}
god("Gabriel Alves")

function idade(atual, nasc){
  var idade = atual - nasc;
  console.log("Gabriel tem: " + idade);
  return idade
}
 idade(2026, 1998)