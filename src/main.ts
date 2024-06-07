import { Game } from "./game";

const game= new Game();

document.addEventListener("click", (e: MouseEvent) =>{
    const target = e.target as HTMLElement;
    if(target.classList.contains("col-4"))
        game.play(parseInt(target.id), target);
})