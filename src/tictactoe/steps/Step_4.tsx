import React from 'react';
import { IMove, isMoveLegal } from './Step_2';
import { IGameState } from './Step_1';
import { updateGameStatus } from './Step_6';

export const makeMove = (lastMove: IMove, gameState: IGameState) => {

    let player;
    if(!isMoveLegal(lastMove, gameState)) return;
    if(lastMove.player) {
        player = lastMove.player
    } else player = gameState.xIsNext ? 'O' : 'X';

    gameState.board[lastMove.move] = gameState.xIsNext ? 'O' : 'X';
    gameState.xIsNext = !gameState.xIsNext;
    updateGameStatus(player, gameState);
}
