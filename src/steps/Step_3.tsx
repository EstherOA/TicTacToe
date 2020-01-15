import React from 'react';
import { IGameState } from './Step_1';
import { isMoveLegal } from './Step_2';

export const getLegalMoves = (currentPlayer: string, gameState: IGameState) => {

    let moves: string[] = [];

    //get all empty squares
    gameState.board.forEach( (square: any, i: any) => {
        if(isMoveLegal({move: i, player: currentPlayer}, gameState))
            moves.push(square);
    });
    return moves;
}
