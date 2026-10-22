// var (variaveis)=[]

var aluno=["ana", "jose", "gabriel"]
console.log(aluno[0])
console.log(aluno[1])
console.log(aluno[2])

// retirar e acrescentar elementos no final do array (pop e push)
aluno.pop()
console.log(aluno)
aluno[1]="pedro"
console.log(aluno)
aluno.push("josé")
console.log(aluno)

// retirar e acrescentar elementos no inicio do array (shift e unshift)
aluno.unshift("gustavo")
console.log(aluno)
aluno.unshift("Wilson")
console.log(aluno)
aluno.shift("gustavo")
console.log(aluno)

//aluno.shift() > retira o primeiro elemento do array

aluno.splice(1,3, "rodrigo", "gabriel", "jorge")
console.log(aluno)




// var ____ {}
var animal={animal: "gato", nome: "Aurora", idade: 15, raca: "Angora", cor: "branca"}
console.log(animal)