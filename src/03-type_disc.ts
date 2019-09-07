// Type discriminators

/* The available update action types */
export enum UpdateActionType {
  ChangeInstanceCount,
  MoveToNewInstance,
  RecycleAll
}

/* Base interface */
export interface UpdateAction {
  type: UpdateActionType;
}

export interface ChangeInstanceCount extends UpdateAction {
  type: UpdateActionType.ChangeInstanceCount;
  newInstanceCount: number;
}

export interface MoveToNewInstance extends UpdateAction {
  type: UpdateActionType.MoveToNewInstance;
  targetInstanceId: string;
}

export interface RecycleAll extends UpdateAction {
  type: UpdateActionType.RecycleAll,
  recycleDurationMinutes: number;
}

export type UpdateActions = ChangeInstanceCount | MoveToNewInstance | RecycleAll;

function executeAction(action: UpdateActions) {
  switch (action.type) {
    case UpdateActionType.ChangeInstanceCount:
      console.log(`Changing instance count... newInstanceCount: ${action.newInstanceCount}`);
      break;
    case UpdateActionType.MoveToNewInstance:
      console.log(`Moving to new instance... target: ${action.targetInstanceId}`);
      break;
    case UpdateActionType.RecycleAll:
      // TODO
      break;
  }
}

executeAction({ type: UpdateActionType.MoveToNewInstance, targetInstanceId: 'id01' });