import React from "react";
import classNames from "classnames";
import { IGrooveProps } from "./types";
import useStyles from './style'

const Groove: React.FC<IGrooveProps> = ({ id, circleType, onClick}) => {
    const classes = useStyles()
    const circleClass = classNames(classes.circle, circleType === "red" ? classes.red : classes.yellow);
    return (
      <div className={classes.groove} onClick={() => onClick(id)}>
        {circleType && <div className={circleClass} />}
      </div>
    );
}

export default Groove
