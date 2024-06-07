export class TictactoeBoad {
    constructor() {
        this.squares = Array(9).fill(null); // [null,null,null,null,null,null,null,null,null]
    }
    makeMove(player, position) {
        if (position < 0 && position >= this.squares.length && this.squares[position])
            return false;
        this.squares[position] = player;
        return true;
    }
    checkWinner() {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (const [a, b, c] of lines)
            if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c])
                return this.squares[a];
        return null;
    }
    isFull() {
        return this.squares.every(square => square !== null);
    }
}
