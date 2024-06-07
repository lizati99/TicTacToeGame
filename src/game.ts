import { TictactoeBoad } from "./board";
import { Player } from "./interfaces";

export class Game {
    board: TictactoeBoad;
    currentPlayer:Player;
    nextPlayer : HTMLElement;
    constructor() {
        this.board = new TictactoeBoad();
        this.currentPlayer = 'X';
        this.nextPlayer = document.querySelector(".nextPlayer") as HTMLElement;
        this.nextPlayer.innerHTML=this.currentPlayer;
    }

    showPlayer(message: string){
        this.nextPlayer.innerHTML=message;
    }

    play(position:number, target : HTMLElement){
        if(this.board.makeMove(this.currentPlayer, position)){
            target.innerHTML=this.currentPlayer;
            const winner=this.board.checkWinner();
            if(winner){
                this.showPlayer(`${winner} won the game`)
                if(winner=="X"){
                    const playerX : HTMLElement = document.querySelector(".playerX > span") as HTMLElement;
                    playerX.innerHTML= `${parseInt(playerX.innerHTML)+1}`;
                }else{
                    const playerO : HTMLElement = document.querySelector(".playerO > span") as HTMLElement;
                    playerO.innerHTML= `${parseInt(playerO.innerHTML)+1}`;
                }
                    
                this.reset();
            }else if(this.board.isFull()){
                this.showPlayer("It's a draw");
                this.reset();
            }else{
                console.log("Current player: " + this.currentPlayer+", Position is :"+ position);
                this.currentPlayer = this.currentPlayer === 'X'? 'O' : 'X';
                this.showPlayer(this.currentPlayer);
            }
        }else{
            console.log("Invalid move. Try again!!");
            this.reset();
        }

    }

    reset(): void {
        setTimeout(() => {
            this.board = new TictactoeBoad();
            this.currentPlayer = 'X';
            const squares : NodeListOf<HTMLElement>=document.querySelectorAll('.col-4') as NodeListOf<HTMLElement>;
            squares.forEach(s => s.innerHTML = '');
            this.showPlayer(this.currentPlayer);
        }, 1000);
    }
}