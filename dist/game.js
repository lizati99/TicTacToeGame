import { TictactoeBoad } from "./board.js";
export class Game {
    constructor() {
        this.board = new TictactoeBoad();
        this.currentPlayer = 'X';
        this.nextPlayer = document.querySelector(".nextPlayer");
        this.nextPlayer.innerHTML = this.currentPlayer;
    }
    showPlayer(message) {
        this.nextPlayer.innerHTML = message;
    }
    play(position, target) {
        if (this.board.makeMove(this.currentPlayer, position)) {
            target.innerHTML = this.currentPlayer;
            const winner = this.board.checkWinner();
            if (winner) {
                this.showPlayer(`${winner} won the game`);
                if (winner == "X") {
                    const playerX = document.querySelector(".playerX > span");
                    playerX.innerHTML = `${parseInt(playerX.innerHTML) + 1}`;
                }
                else {
                    const playerO = document.querySelector(".playerO > span");
                    playerO.innerHTML = `${parseInt(playerO.innerHTML) + 1}`;
                }
                this.reset();
            }
            else if (this.board.isFull()) {
                this.showPlayer("It's a draw");
                this.reset();
            }
            else {
                console.log("Current player: " + this.currentPlayer + ", Position is :" + position);
                this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
                this.showPlayer(this.currentPlayer);
            }
        }
        else {
            console.log("Invalid move. Try again!!");
            this.reset();
        }
    }
    reset() {
        setTimeout(() => {
            this.board = new TictactoeBoad();
            this.currentPlayer = 'X';
            const squares = document.querySelectorAll('.col-4');
            squares.forEach(s => s.innerHTML = '');
            this.showPlayer(this.currentPlayer);
        }, 1000);
    }
}
