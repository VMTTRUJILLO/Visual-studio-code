let correctAnswer;

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    correctAnswer = num1 + num2;
    document.getElementById('question').innerText = `¿Cuánto es ${num1} + ${num2}?`;
}

document.getElementById('submit').addEventListener('click', function() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const result = document.getElementById('result');
    if (userAnswer === correctAnswer) {
        result.innerText = "¡Correcto!";
    } else {
        result.innerText = "Inténtalo de nuevo.";
    }
    document.getElementById('answer').value = '';
    generateQuestion();
});

generateQuestion();