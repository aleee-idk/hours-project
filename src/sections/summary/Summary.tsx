import { useSubtasksContext } from "../../Context/useSubtask";
import style from "./Summary.module.css";

export const Summary = (props: {}) => {
  const { data } = useSubtasksContext();
  return (
    <div>
      <h2>Summary</h2>

      <section className={style.grid}>
        <div className={style.info_group}>
          <label htmlFor="task-name">Task Name</label>
          <input type="text" id="task-name" name="task-name" />
        </div>

        <div className={style.info_group}>
          <label>N° Subtasks</label>
          <div>{data.totalSubtasks}</div>
        </div>

        <div className={style.info_group}>
          <label>Time (Hours)</label>
          <div>{data.totalHours}</div>
        </div>

        <div className={style.info_group}>
          <label>Time (Minutes)</label>
          <div>{data.totalMinutes}</div>
        </div>
      </section>
    </div>
  );
};
