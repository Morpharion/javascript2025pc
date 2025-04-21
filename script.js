document.querySelector(".small-game-card-pic1").addEventListener("click", startGuessingGame);

function startGuessingGame() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    while (true) {
        let userGuess = prompt("Угадайте число от 1 до 100:");
        attempts++;

        if (userGuess === null) {
            alert("Игра окончена. Вы вышли.");
            break;
        }

        userGuess = Number(userGuess);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            alert("Введите число от 1 до 100.");
            continue;
        }

        if (userGuess > randomNumber) {
            alert("Загаданное число меньше.");
        } else if (userGuess < randomNumber) {
            alert("Загаданное число больше.");
        } else {
            alert(`Поздравляю! Вы угадали число ${randomNumber} за ${attempts} попыток.`);
            break;
        }
    }
}

document.querySelector(".mid-game-card-pic2").addEventListener("click", startMathGame);

function startMathGame() {
    const operations = ["+", "-", "*", "/"];
    
    while (true) {
        const num1 = Math.floor(Math.random() * 20) + 1;
        const num2 = Math.floor(Math.random() * 20) + 1;
        const operation = operations[Math.floor(Math.random() * operations.length)];
        
        let correctAnswer;
        let question;

        if (operation === "+") {
            correctAnswer = num1 + num2;
            question = `${num1} + ${num2} = ?`;
        } else if (operation === "-") {
            correctAnswer = num1 - num2;
            question = `${num1} - ${num2} = ?`;
        } else if (operation === "*") {
            correctAnswer = num1 * num2;
            question = `${num1} * ${num2} = ?`;
        } else if (operation === "/") {
            correctAnswer = (num1 / num2).toFixed(2);
            question = `${num1} / ${num2} = ? (Округлите до 2 знаков)`;
        }

        let userAnswer = prompt(question);
        
        if (userAnswer === null) {
            alert("Игра окончена. Вы вышли.");
            break;
        }

        userAnswer = Number(userAnswer);

        if (isNaN(userAnswer)) {
            alert("Введите число!");
            continue;
        }

        if (userAnswer === Number(correctAnswer)) {
            alert("Правильно! Отличная работа!");
        } else {
            alert(`Неправильно. Правильный ответ: ${correctAnswer}`);
        }
    }
}

document.querySelector(".small-game-card-pic3").addEventListener("click", reverseTextGame);

function reverseTextGame() {
    while (true) {
        let userText = prompt("Введите текст, который нужно перевернуть (или нажмите 'Отмена' для выхода):");

        if (userText === null) {
            alert("Игра окончена.");
            break;
        }

        let reversedText = userText.split("").reverse().join("");
        alert(`Перевернутый текст: ${reversedText}`);
    }
}

document.querySelector(".big-game-card-pic4").addEventListener("click", playRockPaperScissors);

function playRockPaperScissors() {
    const choices = ["камень", "ножницы", "бумага"];

    while (true) {
        let userChoice = prompt("Выберите: камень, ножницы или бумага (или нажмите 'Отмена' для выхода):");

        if (userChoice === null) {
            alert("Игра окончена.");
            break;
        }

        userChoice = userChoice.toLowerCase();

        if (!choices.includes(userChoice)) {
            alert("Некорректный ввод. Попробуйте снова.");
            continue;
        }

        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        alert(`Компьютер выбрал: ${computerChoice}`);

        if (userChoice === computerChoice) {
            alert("Ничья!");
        } else if (
            (userChoice === "камень" && computerChoice === "ножницы") ||
            (userChoice === "ножницы" && computerChoice === "бумага") ||
            (userChoice === "бумага" && computerChoice === "камень")
        ) {
            alert("Вы победили!");
        } else {
            alert("Вы проиграли!");
        }
    }
}

document.querySelector(".mid-game-card-pic5").addEventListener("click", startQuiz);

function startQuiz() {
    const questions = [
        {
            question: "Какой цвет получается при смешивании синего и жёлтого?",
            options: ["1) Зелёный", "2) Красный", "3) Фиолетовый"],
            correct: 1
        },
        {
            question: "Сколько планет в Солнечной системе?",
            options: ["1) 7", "2) 8", "3) 9"],
            correct: 2
        },
        {
            question: "Как зовут главного героя в 'Гарри Поттере'?",
            options: ["1) Гарри Поттер", "2) Рон Уизли", "3) Гермиона Грейнджер"],
            correct: 1
        }
    ];

    let correctAnswers = 0;

    for (let i = 0; i < questions.length; i++) {
        let userAnswer = prompt(
            `${questions[i].question}\n${questions[i].options.join("\n")}\nВведите номер ответа:`
        );

        if (userAnswer === null) {
            alert("Викторина завершена.");
            return;
        }

        if (parseInt(userAnswer) === questions[i].correct) {
            correctAnswers++;
        }
    }

    alert(`Викторина окончена! Вы правильно ответили на ${correctAnswers} из ${questions.length} вопросов.`);
}

document.querySelector(".big-game-card-pic6").addEventListener("click", function () {
    const gamesSection = document.querySelector(".games");
    if (gamesSection) {
        gamesSection.style.backgroundColor = getRandomColor();
    }
});

function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}
