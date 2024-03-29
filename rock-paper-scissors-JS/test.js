const player_score_span = document.getElementById("player_score");
const computer_score_span = document.getElementById("computer_score");
const score_board_div = document.getElementById("score");
const result_div = document.getElementById("results");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

const verdict_div = document.getElementById("verdict");
const bold_element = document.createElement("b");

let player_score = 0;
let computer_score = 0;

function getBothOptions(player, computer) {
    document.getElementById(player).classList.add('g-glow');
    document.getElementById(computer).classList.add('r-glow');
    setTimeout(function() { 
        document.getElementById(player).classList.remove('g-glow');
        document.getElementById(computer).classList.remove('r-glow');
    }, 500)
}

function getComputerOption() {
    const option = ['rock', 'paper', 'scissors'];
    const rand = Math.floor(Math.random() * 3);
    return option[rand];
}

function win(player, computer) {
    player_score++;
    player_score_span.innerHTML = player_score;
    result_div.innerHTML =  "<b>"
                            + (player.charAt(0).toUpperCase() + player.slice(1)) 
                            + "</b> beats <b>" 
                            + computer.charAt(0).toUpperCase() + computer.slice(1)
                            + "</b>";
    verdict_div.innerHTML = "you <b>WIN</b>!";
    getBothOptions(player, computer);
}

function lose(player, computer) {
    computer_score++;
    computer_score_span.innerHTML = computer_score;
    result_div.innerHTML = (player.charAt(0).toUpperCase() + player.slice(1)) 
                            + " does not beat " 
                            + computer.charAt(0).toUpperCase() + computer.slice(1);
    verdict_div.innerHTML = "you <b>LOSE</b>!";
    getBothOptions(player, computer);
}

function draw(player, computer) {
    computer_score++;
    computer_score_span.innerHTML = computer_score;
    result_div.innerHTML = "it's a draw!";
    verdict_div.innerHTML = "nobody wins...";
}

function checkIfOver() {
    if(player_score == 10 || computer_score == 10) {
        console.log("wow");
        return true;
    }
}

function game(player) {
    const comp = getComputerOption();
    console.log("player: " + player);
    console.log("computer: " + comp);

    switch(player + comp) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            console.log("you win!"); 
            win(player, comp);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            console.log("you lose!");
            lose(player, comp);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            console.log("it's a draw :o");
            draw(player, comp);
            break;        
    } 
    
}

function main() { 
    rock_div.addEventListener('click', function() {
        game("rock");
    })

    paper_div.addEventListener('click', function() {
        game("paper");
    })

    scissors_div.addEventListener('click', function() {
        game("scissors");
    })
}

main();