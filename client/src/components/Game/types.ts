export interface IMatrixProps {
  columns: number;
  rows: number;
}

export interface State {
  circlesPositions: CirclesPositions;
  gameStatus: string;
  playerTurn: Player;
  restart?: boolean;
}

export type Player = "red" | "yellow" | "";

export interface CirclesPositions {
  [key: string]: Player;
}