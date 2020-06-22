import React, { useState } from 'react';
import { Square } from './Square';
import { IGameState } from '../steps/Step_1';
import { Divider, ButtonGroup } from '@material-ui/core';

export const Board = () => {
    const [ state, setState ] = useState<IGameState>({
        board: Array(9).fill(null),
        status: 'INITIAL',
        xIsNext: false,
        winner: null
    });

    const renderSquare = (index: number) => {
        let value = state.board[index] ? state.board[index] : '';
        return (
            <Square onClick={() => handleClick(index)} value={value} index={index}/>
        );
    }

    const renderGameText = () => {

        let text: string;
        switch(state.status) {
            case 'INITIAL' :
                text = 'Welcome to TicTacToe. Current Player: X';
                break;
            case 'ONGOING' : 
                text = `Current Player - ${state.xIsNext ? `O` : `X`}`;
                break;
            case 'PAUSED' :
                text = `Game paused. Current Player - ${state.xIsNext ? `O` : `X`}`;
                break;
            case 'COMPLETED'  :
                text =  state.winner ? `Congratulations, Player ${state.winner}!! You won` : 'Game ended in a draw';
                break;
            default: 
            text = '';        
        }
        return text;
    }

    const handleClick = (index: number) => {
        console.log(index);
    }

    return (
        <div>
            <span>{renderGameText()}</span>
        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
            <Divider />
        </ButtonGroup>    
        <ButtonGroup>    
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
            <Divider />
        <ButtonGroup>    
        </ButtonGroup>    
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </ButtonGroup>    
        </div>
    );
}