import React from "react";
import Column from "../Column/Column";
import { IBoardProps } from "./types";
import useStyles from './style'

const Board: React.FC<IBoardProps> = ({ columns, rows, circlesPositions, onGrooveClick }) => {
  const classes = useStyles();

  const renderColumns = ():JSX.Element => {
    const columnsComponents = [];

    for (let column = 0; column < columns; column++) {
      columnsComponents.push(
          <Column 
            key={column} 
            column={column} 
            rows={rows} 
            circlesPositions={circlesPositions} 
            onGrooveClick={onGrooveClick} 
          />);
    }
    return <>{columnsComponents}</>;
  }

    return <div className={classes.board}>{renderColumns()}</div>; 
}

export default Board