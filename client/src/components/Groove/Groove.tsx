import React, {useMemo} from "react";
import classNames from "classnames";
import { IGrooveProps } from "./types";
import classes from './style.module.css';
import ZoomTransition from "../ZoomTransition/ZoomTransition";
import Zoom from "@material-ui/core/Zoom";

const Groove: React.FC<IGrooveProps> = ({ id, circleType, onClick}) => {
    const circleClass = useMemo(() => classNames(classes.circle, circleType === "red" ? classes.red : classes.yellow),
    [classNames, circleType]
    );
    return (
     
      <div className={classes.groove} onClick={() => onClick(id)}>
        {circleType &&  <div className={circleClass} />}
      </div>
    );
}

export default Groove
