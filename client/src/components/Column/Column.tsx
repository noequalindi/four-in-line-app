import React from "react";
import Groove from "../Groove/Groove";
import { IColumnProps } from "./types";
import useStyles from './style'

const Column: React.FC<IColumnProps> = ( { column, rows, circlesPositions, onGrooveClick } ) => {
    const classes = useStyles();
    const grooves = [];
    for (let row = 0; row < rows; row++) {
      const circleId = `${row}:${column}`;
      const circleType = circlesPositions[circleId];
      grooves.push(<Groove key={circleId} id={circleId} circleType={circleType} onClick={onGrooveClick} />);
    }

    return <div className={classes.column}>{grooves}</div>;
  
}
export default Column