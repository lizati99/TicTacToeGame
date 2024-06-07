export type Player='X'|'O';

export interface Move{
    player:Player;
    position:Number;
}

export interface Board{
    squares:(Player|null)[];
    makeMove(player:Player, position:number):boolean
}
