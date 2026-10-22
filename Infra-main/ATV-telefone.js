// Atividade Telefonica

//MENU DE ATENDIMENTO
const input = require('readline-sync');

var opcao = input.question("Escolha uma opcao: ");

switch (opcao) {
    case "1":
        console.log("Opção 1: Contrar novos planos ou fazer Upgrade.");
        break;
    case "2":
        console.log("Opção 2: segunda via de contas, recargas e código de barras.");
        break;
    case "3":
        console.log("Opção 3: Suporte técnico sinal ou falta de internet.");
        break;
    case "4":
        console.log("Opção 4: Troca de aparelhos, mudanças de endereços ou portabilidade.");
        break;
    case "5":
        console.log("Opção 5: Falar com um atendente.");
        break;
    case "9":
        console.log("Opção 9: Sair.");
        break;
    default:
        console.log("Opção inválida.");
}