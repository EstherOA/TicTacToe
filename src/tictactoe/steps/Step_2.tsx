import React from 'react';
import { IGameState } from './Step_1';

export const isMoveLegal = (lastMove: IMove, gameState: IGameState) => {

    //check if game is completed
    if(gameState.status !== 'ONGOING')
        return false;

    //check if it's the right player's turn
    if(gameState.xIsNext && lastMove.player !== 'O')
        return false;

    //check if the move is to an empty square
    if(gameState.board[lastMove.move] !== null)
        return false;

    return true
}

export interface IMove {
    player?: string;
    move: number;
}