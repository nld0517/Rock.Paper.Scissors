(function () {
    console.log('IIFE');
    var choices = ['rock', 'paper', 'scissors'];
    var index = Math.floor((Math.random() * 3));
    var computer = choices[index];
    var rock = document.getElementById('rock');
    var paper = document.getElementById('paper');
    var scissors = document.getElementById('scissors');

    rock.addEventListener('click', function () {
        play('rock');
    });

    paper.addEventListener('click', function () {
        play('paper');
    });

    scissors.addEventListener('click', function () {
        play('scissors');
    });

    function showResult(result) {
        alert(result);
    }
    // Add your "play" function below this comment
    function play(human) {
        index = Math.floor((Math.random() * 3));
        computer = choices[index];
        if (human === computer) {
            showResult(`Tie |` +` ` + 'Computer: ' + computer +` | `+ 'Human:' + human)
        }
        if (human === "paper" && computer === "rock") {
            showResult(`Human Wins |` +` ` + 'Computer: ' + computer +` | `+ 'Human: ' + human)
        }
        if (human === "paper" && computer === "scissors") {
            showResult(`Computer Wins |` +` `+ 'Computer: ' + computer +` | `+ 'Human: ' + human)
        }
        if (human === "rock" && computer === "paper") {
            showResult(`Computer Wins |` +` `+ 'Computer: ' + computer +` | `+ 'Human: ' + human)
        }
        if (human === "rock" && computer === "scissors") {
            showResult(`Human Wins |` +` `+ 'Computer: ' + computer +` | `+ 'Human: ' + human)
        }
        if (human === "scissors" && computer === "paper") {
            showResult(`Human Wins |` +` `+ 'Computer: ' + computer +` | `+ 'Human: ' + human)
        }
        if (human === "scissors" && computer === "rock") {
            showResult(`Computer Wins |` +` `+ 'Computer: ' + computer +` | `+ 'Human: ' + human)
        }
    }
})();