// Importa o módulo 'readline' para lidar com entrada e saída no console (necessário para Node.js)
const readline = require('readline');

// Cria a interface para ler e escrever no console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Classe genérica que representa um Herói em uma aventura.
 */
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase(); // Garante que o tipo está em minúsculas para o switch/case
    }

    // Método Atacar
    atacar() {
        let ataque = "";

        // Estrutura de Decisão para definir o ataque
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque desconhecido, pois o tipo é inválido";
        }

        // Saída Requerida
        console.log(`\n--- RESULTADO DA AVENTURA ---`);
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
        console.log(`Detalhes: ${this.nome}, ${this.idade} anos.`);
        console.log(`-----------------------------`);
    }
}

// Função principal para capturar o input do usuário
function iniciarAventura() {
    console.log("==========================================");
    console.log("Bem-vindo ao Construtor de Heróis da DIO!");
    console.log("==========================================");
    
    // Pergunta 1: Nome
    rl.question('Qual é o NOME do seu herói? ', (nome) => {
        // Pergunta 2: Idade
        rl.question('Qual é a IDADE do seu herói? ', (idade) => {
            
            const tiposValidos = ['guerreiro', 'mago', 'monge', 'ninja'];
            
            // Pergunta 3: Tipo
            rl.question(`Qual é o TIPO do seu herói? (${tiposValidos.join(', ')}): `, (tipo) => {
                
                // Validação do Tipo
                if (!tiposValidos.includes(tipo.toLowerCase())) {
                    console.log(`\n🚫 Tipo de herói inválido: "${tipo}". Use um dos tipos sugeridos.`);
                    rl.close();
                    return;
                }
                
                // Criação do Objeto Heroi
                const heroi = new Heroi(nome, idade, tipo);
                
                // Chamada do Método Atacar
                heroi.atacar();
                
                // Fecha a interface de leitura
                rl.close();
            });
        });
    });
}

// Inicia a execução do programa
iniciarAventura();