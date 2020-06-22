import React, { useState } from 'react';

export interface IGameState {
    board: any[],
    xIsNext: boolean,
    status: 'COMPLETED' | 'ONGOING' | 'PAUSED' | 'INITIAL',
    winner: string | null;
}
