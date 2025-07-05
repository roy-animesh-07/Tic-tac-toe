import React from 'react';

interface CellProps {
    value?: string|null;
    onClick?: () => void;
}

const Cell:React.FC<CellProps> = (props) => {
    return(
        <div className="cell" onClick={props.onClick}>{props.value}</div>
    );
}
export default Cell;