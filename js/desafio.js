let dadosXp = [
 ["Pikachu", "1000"],
 ["Charmander", "2000"],
 ["Bulbasaur", "5000"],
 ["Squirtle", "7000"],
 ["Eevee", "8000"],
 ["Gengar", "9000"],
 ["Snorlax", "10000"],
 ["Mewtwo", "10001"]
]

function descobrirNivel(xp) {
    if (xp < 1000) {
        return "Ferro"
    } else if (xp <= 2000) {
        return "Bronze"
    } else if (xp <= 5000) {
        return "Prata"
    } else if (xp <= 7000) {
        return "Ouro"
    } else if (xp <= 8000) {
        return "Platina"
    } else if (xp <= 9000) {
        return "Ascendente"
    } else if (xp <= 10000) {
        return "Imortal"
    } else {
        return "Radiante"
    }
}

for (let i = 0; i < dadosXp.length; i++) {
    
    let nome = dadosXp[i][0]
    let xp = Number(dadosXp[i][1])  // converte string p/ número
    let nivel = descobrirNivel(xp)

    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`)
}
