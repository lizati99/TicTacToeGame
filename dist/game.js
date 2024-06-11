import { TictactoeBoad } from "./board.js";
export class Game {
    constructor() {
        this.board = new TictactoeBoad();
        this.currentPlayer = 'X';
        this.nextPlayer = document.querySelector(".nextPlayer");
        this.nextPlayer.innerHTML = this.currentPlayer;
        this.squares = document.querySelectorAll(".col-4");
    }
    showPlayer(message) {
        this.nextPlayer.innerHTML = message;
    }
    play(position, target) {
        if (this.board.makeMove(this.currentPlayer, position)) {
            target.innerHTML = this.currentPlayer;
            target.classList.add("fullSquare");
            const winner = this.board.checkWinner();
            if (winner) {
                this.showPlayer(`${winner[0]} won the game`);
                if (winner[0] == "X") {
                    const playerX = document.querySelector(".playerX > span");
                    playerX.innerHTML = `${parseInt(playerX.innerHTML) + 1}`;
                }
                else {
                    const playerO = document.querySelector(".playerO > span");
                    playerO.innerHTML = `${parseInt(playerO.innerHTML) + 1}`;
                }
                this.squares.forEach(square => {
                    const [, a, b, c] = winner;
                    const idSquare = square.getAttribute("id");
                    if (idSquare != a && idSquare != b && idSquare != c) {
                        square.classList.add("disabled");
                    }
                    ;
                });
                this.reset();
            }
            else if (this.board.isFull()) {
                this.showPlayer("It's a draw");
                this.reset();
            }
            else {
                this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
                this.showPlayer(this.currentPlayer);
            }
        }
        else {
            this.showPlayer("Invalid move. Try again!!");
            this.reset();
        }
    }
    reset() {
        setTimeout(() => {
            this.board = new TictactoeBoad();
            this.currentPlayer = 'X';
            this.squares.forEach(s => s.innerHTML = '');
            this.showPlayer(this.currentPlayer);
            this.squares.forEach(square => square.classList.remove("disabled", "fullSquare"));
        }, 1000);
    }
}
