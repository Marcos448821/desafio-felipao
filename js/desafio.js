// Importa o prompt-sync para ler do teclado
const prompt = require("prompt-sync")();

// Lê o nome do herói
let nome = prompt("Digite o nome do herói: ");

// Lê o XP do herói e converte para número
let xp = Number(prompt("Digite o XP do herói: "));

// Função para descobrir o nível
function descobrirNivel(xp) {
    if (xp < 1000) {
        return "Ferro";
    } else if (xp <= 2000) {
        return "Bronze";
    } else if (xp <= 5000) {
        return "Prata";
    } else if (xp <= 7000) {
        return "Ouro";
    } else if (xp <= 8000) {
        return "Platina";
    } else if (xp <= 9000) {
        return "Ascendente";
    } else if (xp <= 10000) {
        return "Imortal";
    } else {
        return "Radiante";
    }
}

// Descobre o nível do herói
let nivel = descobrirNivel(xp);

// Mostra o resultado final
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
