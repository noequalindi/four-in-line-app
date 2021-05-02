export interface IMatrixProps {
  columns: number;
  rows: number;
  playerColor: string;
}

export interface State {
  circlesPositions: CirclesPositions;
  gameStatus: string;
  playerTurn: Player;
  gameOver?: GameStatus;
}
export interface GameStatus {
  player: Player;
  winner: boolean;
}
export type Player = "red" | "yellow" | "";

export interface CirclesPositions {
  [key: string]: Player;
}