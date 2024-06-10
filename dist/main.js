import { Game } from "./game.js";
const game = new Game();
document.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("col-4"))
        game.play(parseInt(target.id), target);
});



