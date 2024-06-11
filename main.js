const board = Chessboard('board1', {
    draggable: true, //permet le déplacement des pièces 
    position: 'start', //position initial du jeu 
    onDragStart,
    onDrop,
})

const game = new Chess();

function onDragStart(_source, piece){
    if (game.game_over()) return false;
    //if (piece && piece.search(/^b/) !== -1) return false; //permet de jouer que les blancs
}
function onDrop(source, target){
    const move = game.move({
        from:source,
        to: target,
        promotion:'q'
    });

    if (move === null) return 'snapback';
    setTimeout(makeComputerMove, 250);
}


function makeComputerMove(){
    const possibleMoves = game.moves();

    if (possibleMoves.lenght === 0) {
        alert('GG');
        resetGame();
        return;
    };

    const randomMove = Math.floor(Math.random() * possibleMoves.lenght);
    game.move(possibleMoves[randomMove]);
    board.position(game.fen());
}




