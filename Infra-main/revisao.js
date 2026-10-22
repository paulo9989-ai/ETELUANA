var nome = "Gabriel" //uma valor

var alnos = ["Gabriel", "Ana", "Matsui"] // variavel, e valor

//Dicionario
var escola = { 
    aluno:["Gabriel", "Ana","Matsui"],
    disciplina:["Logica", "JavaScript","infraestruturas de sofwere" ],
    nome:["ETE ADV Gil "],
    turno: ["noite"],
}

escola.aluno.push("Leonardo")
escola.disciplina.push("Projeto intregador")
escola.matricula=true // adicionar uma variavel do dicionario
console.log(escola)
console.log(escola.aluno[0]) //chama um elemento epecifico do dicionario

delete escola.turno // deletar um elemento
console.log(escola)


// ATIVIDADE, CRIAR UM NOVO DICIONARIO 

var merenda={
    fila:["gabriel", "pedro", "ana", "wiiiiiilsooon!", "eu"],
    cardapio:["bolacha", "Café(opicional)", "Bolinho de bacia", "Cuscuz com salsicha(espero algum dia)"],
    horarios:["manha: 10h", "tade: 15h", "noite: poderia ter"],
}

merenda.dias = ["segunda","terça"]
merenda.dias.push("sexta")
console.log(merenda)
