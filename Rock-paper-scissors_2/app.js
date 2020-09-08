const game = ()=> {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function() {
                this.style.animation = '';
            })
        })

        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach((option)=>{
            option.addEventListener('click', function() {
                //Computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    compareHands(this.textContent, computerChoice);
                    //Update images
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);
                //Animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            })
        })
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoise) => {
        const winner = document.querySelector('.winner');
        // Check fo tie
        if(playerChoice === computerChoise) {
            winner.textContent = 'It is a tie';
            return;
        }

        //Check for rock
        if(playerChoice === 'rock') {
            if(computerChoise === 'scissors') {
                winner.textContent = "Player wins";
                pScore++;
                updateScore();
            }
            else {
                winner.textContent = "Computer wins";
                cScore++;
                updateScore();
            }
            return;
        }

        //Check for scissors
        if(playerChoice === 'scissors') {
            if(computerChoise === 'paper') {
                winner.textContent = "Player wins";
                pScore++;
                updateScore();
            }
            else {
                winner.textContent = "Computer wins";
                cScore++;
                updateScore();
            }
            return;
        }

        //Check for paper
        if(playerChoice === 'paper') {
            if(computerChoise === 'rock') {
                winner.textContent = "Player wins";
                pScore++;
                updateScore();
            }
            else {
                winner.textContent = "Computer wins";
                cScore++;
                updateScore();
            }
            return;
        }
    }

    startGame();
    playMatch();
};

game();