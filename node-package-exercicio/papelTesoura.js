function choiceRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const options = { 0: "pedra", 1: "papel", 2: "tesoura" }
const myChoice = process.argv[2]
const pcChoice = options[choiceRandom(0, 2)]

if ((myChoice === "pedra" && pcChoice === "tesoura") || (myChoice === "papel" && pcChoice === "pedra") || (myChoice === "tesoura" && pcChoice === "papel")) {
    console.log(`você escolheu ${myChoice} e o computador escolheu ${pcChoice}. Você venceu!`)
} else if (myChoice === pcChoice) {
    console.log(`você escolheu ${myChoice} e o computador escolheu ${pcChoice}. Empate`)
}
else {
    console.log(`você escolheu ${myChoice} e o computador escolheu ${pcChoice}. Você perdeu!`)
}