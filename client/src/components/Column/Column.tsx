import React, { useMemo } from "react";
import Groove from "../Groove/Groove";
import { IColumnProps } from "./types";
import classes from './style.module.css';

const Column: React.FC<IColumnProps> = ( { column, rows, circlesPositions, onGrooveClick } ) => {
    const grooves = useMemo(() => {
      const _grooves = [];
      for (let row = 0; row < rows; row++) {
        const circleId = `${row}:${column}`;
        const circleType = circlesPositions[circleId];
        _grooves.push(<Groove key={circleId} id={circleId} circleType={circleType} onClick={onGrooveClick} />);
      }
      return _grooves;
    }, [column, rows, circlesPositions, onGrooveClick]);

    return <div className={classes.column}>{grooves}</div>;
  
}
export default Column