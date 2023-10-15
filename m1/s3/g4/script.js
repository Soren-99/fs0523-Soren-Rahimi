const scoreboard = document.getElementById("scoreboard")
const extractNumberButton = document.getElementById("extractNumber")

const numbersExtract = new Set();

function createScoreboard(){
    for (let i = 1; i <=76; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = i;
        scoreboard.appendChild(cell);
    }
}

function extractNumber(){
    if (numbersExtract.size >= 76) {
        alert("You have extracted all the numbers!");
        return;
    }

    let casualNumber;
    do {
        casualNumber = Math.floor(Math.random() * 76) + 1;
    } while (numbersExtract.has(casualNumber));

    numbersExtract.add(casualNumber);

    const underlinedCell = document.querySelector(`.cell:nth-child(${casualNumber})`)
    underlinedCell.classList.add('underlined');
}

extractNumberButton.addEventListener('click', extractNumber);
createScoreboard()

