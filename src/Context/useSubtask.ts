import {
  Reducer,
  useReducer,
  createContext,
  useContext,
  Dispatch,
} from "react";

export enum actions {
  ADD,
}

export interface subtaskInterface {
  name?: string;
  dificulty?: number;
  knowledge?: number;
  hours?: number;
  minutes?: number;
}

export interface dataInterface {
  subtasks: subtaskInterface[];
  totalSubtasks: number;
  totalHours: number;
  totalMinutes: number;
}

interface actionInterface {
  type: actions;
  item?: subtaskInterface;
}

interface contextInterface {
  data: dataInterface;
  dispatch: Dispatch<actionInterface>;
}

export const dataInitialState = {
  subtasks: [] as subtaskInterface[],
  totalSubtasks: 0,
  totalHours: 0,
  totalMinutes: 0,
};

const addSubtask = (state: dataInterface) => {
  const newState = { ...state };

  console.log(newState);

  newState.totalSubtasks += 1;

  return {
    ...state,
    totalSubtasks: state.totalSubtasks + 1,
    subtasks: [...state.subtasks, {}],
  };
};

export const subtasksReducer: Reducer<dataInterface, actionInterface> = (
  state,
  action
) => {
  switch (action.type) {
    case actions.ADD:
      return addSubtask(state);
    default:
      return { ...state };
  }
};

export const useSubtasksReducer = () => {
  return useReducer(subtasksReducer, dataInitialState);
};

export const SubtasksContext = createContext<contextInterface>({
  data: dataInitialState,
  dispatch: () => undefined,
});

export const useSubtasksContext = () => useContext(SubtasksContext);
