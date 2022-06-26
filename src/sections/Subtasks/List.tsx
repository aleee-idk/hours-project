import { actions, useSubtasksContext } from "../../Context/useSubtask";
import { Item } from "./Item";

export const SubtaskList = () => {
  const { data, dispatch } = useSubtasksContext();

  return (
    <div>
      <div className="hstack justify-content-between">
        <h2>Subtasks</h2>
        <button onClick={() => dispatch({ type: actions.ADD })}>Add</button>
      </div>

      {data.subtasks.map((_item, idx) => (
        <Item key={idx} />
      ))}
    </div>
  );
};
