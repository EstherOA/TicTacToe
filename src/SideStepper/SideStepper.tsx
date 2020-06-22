import React, { useState, ReactNode } from 'react';

export interface ISideStepper {
    children?: ReactNode;
    steps: string[];    
}

export interface IStep {
    label: string;
    selected: boolean;
    index: number;
    onClick: () => void;
}

const SideStepper: React.FC<ISideStepper> = ({steps, children}) => {
    const [selected, setSelected] = useState(0);
    const content = Array.isArray(children) ? children : [];

    return (
        <div className="sidestepper-wrapper">
        <div className="steps clearfix">
            <ul role="tablist">
                {
                    steps.map( (step, i) =>
                    <Step label={step} index={i} onClick={() => setSelected(i)} selected={selected === i}/>
                    )
                }
            </ul>
        </div>
            <div className="content">
                {content.length > 0 ? content[selected] : null}
            </div>
        </div>
    );
}  

export const Step = (props: IStep) => (
    <li role="tab" aria-disabled="false" className={props.selected ? 'current' : 'done'} aria-selected={props.selected ? "true" : "false"} onClick={props.onClick} tabIndex={0}>
        <a >
            <span className="number">{props.index}.</span>
            {props.label}
        </a>
    </li>
);

export default SideStepper;