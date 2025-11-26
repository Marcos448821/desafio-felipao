const prompt = require("prompt-sync")();


// Lê valores do teclado
let vitorias = Number(prompt("Digite a quantidade de vitórias: "));
let derrotas = Number(prompt("Digite a quantidade de derrotas: "));

function calcularNivel(vitorias) {
    if (vitorias < 10) {
        return "Ferro";
    } else if (vitorias <= 20) {
        return "Bronze";
    } else if (vitorias <= 50) {
        return "Prata";
    } else if (vitorias <= 80) {
        return "Ouro";
    } else if (vitorias <= 90) {
        return "Diamante";
    } else if (vitorias <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

function resultado(vitorias, derrotas) {
    let saldo = calcularSaldo(vitorias, derrotas);
    let nivel = calcularNivel(vitorias);

    return `O Herói tem de saldo de ${saldo} está no nível de ${nivel}`;
}

console.log("\n" + resultado(vitorias, derrotas));
