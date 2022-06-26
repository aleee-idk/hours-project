import { actions, useSubtasksContext } from "../../Context/useSubtask";
import { Item } from "./Item";
import style from "./List.module.css";

export const SubtaskList = () => {
  const { data, dispatch } = useSubtasksContext();

  return (
    <div id={style.subtasks}>
      <div className="hstack justify-content-between">
        <h2>Subtasks</h2>
        <button
          id={style.addButton}
          onClick={() => dispatch({ type: actions.ADD })}
        >
          Add
        </button>
      </div>

      <div className={style.list}>
        {data.subtasks.map((_item, idx) => (
          <Item key={idx} idx={idx} />
        ))}
      </div>
    </div>
  );
};
