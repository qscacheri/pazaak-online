export type UserState = {
  username: string;
};

export const CHANGE_USERNAME = 'CHANGE_USERNAME';

export type ChangeUsernameAction = {
  type: typeof CHANGE_USERNAME;
  payload: string;
};

export type UserActionType = ChangeUsernameAction;
