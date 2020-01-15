import React from 'react';
import { IGameState } from './Step_1';
import { getLegalMoves } from './Step_3';

export const updateGameStatus = (currentPlayer: string, gameState: IGameState, pause?: boolean) => {

    //check if the board is paused = game paused
    if(pause) {
        gameState.status = 'PAUSED';
        return;
    }
    //check if the board is empty = game ongoing
    let moves = getLegalMoves(currentPlayer, gameState);
    if(moves.length) {
        gameState.status = 'ONGOING';
        return;
    }
    
    if (gameState.board.includes(null))
        return;
    getWinner(gameState.board);
}

const getWinner = (board: any[]) => {
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
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return 'D';
}