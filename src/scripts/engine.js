const emojis = [
    "🚲", "🚲",
    "🥵", "🥵",
    "🤡", "🤡",
    "🐾", "🐾",
    "😎", "😎",
    "😻", "😻",
    "👽", "👽",
    "🦄", "🦄",
];

let openCards = [];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const shuffledEmojis = shuffle(emojis);

for (let i = 0; i < shuffledEmojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = ""; // Inicialmente vazio
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    if (openCards.length < 2 && !this.classList.contains("boxOpen")) {
        this.classList.add("boxOpen");
        this.innerHTML = shuffledEmojis[Array.from(this.parentNode.children).indexOf(this)]; // Mostra o emoji correspondente
        openCards.push(this);
    }

    if (openCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[0].innerHTML = ""; // Esconde o emoji se não combinar
        openCards[1].classList.remove("boxOpen");
        openCards[1].innerHTML = ""; // Esconde o emoji se não combinar
    }

    openCards = [];

    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        setTimeout(() => alert("Você ganhou!!!!"), 100);
    }
}
