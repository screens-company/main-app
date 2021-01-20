import { AnyAction } from 'redux';

export type TActionType<TModule> = {
  [P in keyof TModule]: TModule[P] extends (...args: any[]) => any ? ReturnType<TModule[P]> : never;
}[keyof TModule];

export interface ReduxAction<TPayload> extends AnyAction {
  payload: TPayload;
}
