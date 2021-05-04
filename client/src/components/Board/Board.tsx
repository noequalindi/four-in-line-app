import React, { useCallback } from "react";
import Column from "../Column/Column";
import { IBoardProps } from "./types";
import classes from './style.module.css'

const Board: React.FC<IBoardProps> = ({ columns, rows, circlesPositions, onGrooveClick }) => {

  const renderColumns = useCallback(():JSX.Element => {
    const columnsComponents = [];

    for (let column = 0; column < columns; column++) {
      columnsComponents.push(
          <Column 
            key={column} 
            column={column} 
            rows={rows} 
            circlesPositions={circlesPositions} 
            onGrooveClick={onGrooveClick} 
          />
        );
      }
    return <>{columnsComponents}</>;
  }, [columns, rows, circlesPositions, onGrooveClick]);

  return <div className={classes.board}>{renderColumns()}</div>; 
}

export default Board