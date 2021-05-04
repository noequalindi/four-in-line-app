import { CirclesPositions } from "../Game/types";

export interface IBoardProps {
  rows: number;
  columns: number;
  circlesPositions: CirclesPositions;
  onGrooveClick: (id: string) => any;
}
