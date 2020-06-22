import React from 'react';
import { IGameState } from './Step_1';
import { getLegalMoves } from './Step_3';
import { makeMove } from './Step_4';

export const makeRandomMove = (currentPlayer: string, gameState: IGameState) => {
    let moves = getLegalMoves(currentPlayer, gameState);
    if(!moves.length) 
        return;
    let rand = Math.floor(Math.random() * moves.length);
    makeMove({move: rand, player: currentPlayer}, gameState);
}