export const REGISTER = 'REGISTER';
export type RegisterActionType = {
  type: typeof REGISTER;
  payload: { username: string };
};

export const GAME_UPDATE = 'GAME_UPDATE';
export type GameUpdateType = {
  type: typeof GAME_UPDATE;
  payload: { gameId: string; playerId: string; gameState: any };
};
