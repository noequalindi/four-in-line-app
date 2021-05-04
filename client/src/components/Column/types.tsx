import { CirclesPositions } from "../Game/types";
export interface IColumnProps {
  column: number;
  rows: number;
  circlesPositions: CirclesPositions;
  onGrooveClick: (id: string) => any;
}