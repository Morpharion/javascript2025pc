const wordsToRemember = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startMemoryGame() {
    const shuffledWords = shuffleArray([...wordsToRemember]);

    alert('Запомните слова: ' + shuffledWords.join(', '));

    const firstWord = prompt('Введите первое слово из списка');

    const lastWord = prompt('Введите последнее слово из списка');

    const isCorrectFirstWord = firstWord && firstWord.toLowerCase() === shuffledWords[0].toLowerCase();
    const isCorrectLastWord = lastWord && lastWord.toLowerCase() === shuffledWords[shuffledWords.length - 1].toLowerCase();

    if (isCorrectFirstWord && isCorrectLastWord) {
        alert('Поздравляем! Вы угадали оба слова!');
    } else if (isCorrectFirstWord || isCorrectLastWord) {
        alert('Вы были близки к победе!');
    } else {
        alert('Вы проиграли!');
    }
}

const playButton = document.getElementById('playButton');
playButton.addEventListener('click', startMemoryGame);