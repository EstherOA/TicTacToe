import React from 'react';
import Button from '@material-ui/core/Button';

export const Square = (props: ISquare) => {

    return (
    <Button variant="outlined" onClick={() => props.onClick}>{props.value.toUpperCase()}</Button>
       
    )
}

export interface ISquare {
    index?: number;
    onClick: (index: number) => void;
    value: string
}