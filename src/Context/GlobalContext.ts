import { createContext, useContext } from "react";

export type globalContextType = {
  subtasks: Array<any>;
  totalSubtasks: number;
  totalHours: number;
  totalMinutes: number;
};

export const globalContext = createContext<globalContextType>({
  subtasks: [],
  totalSubtasks: 0,
  totalHours: 0,
  totalMinutes: 0,
});

export const useGlobalContext = () => useContext(globalContext);
