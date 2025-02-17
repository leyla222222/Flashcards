let words = [
    { word: "Apple", translation: "Яблоко" },
    { word: "Book", translation: "Книга" },
    { word: "Sun", translation: "Солнце" }
];

let index = 0;
let showingTranslation = false;

const flashcard = document.getElementById("flashcard");
const nextButton = document.getElementById("next");
const addButton = document.getElementById("addWord");
const newWordInput = document.getElementById("newWord");
const newTranslationInput = document.getElementById("newTranslation");

function updateCard() {
    flashcard.textContent = showingTranslation ? words[index].translation : words[index].word;
}

flashcard.addEventListener("click", () => {
    showingTranslation = !showingTranslation;
    updateCard();
});

nextButton.addEventListener("click", () => {
    index = (index + 1) % words.length;
    showingTranslation = false;
    updateCard();
});

addButton.addEventListener("click", () => {
    const newWord = newWordInput.value.trim();
    const newTranslation = newTranslationInput.value.trim();
    
    if (newWord && newTranslation) {
        words.push({ word: newWord, translation: newTranslation });
        newWordInput.value = "";
        newTranslationInput.value = "";
        alert("Слово добавлено!");
    } else {
        alert("Введите слово и перевод!");
    }
});

updateCard();