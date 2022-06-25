import React from "react";
import style from "./Summary.module.css";

export const Summary = (props: {}) => {
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
          <div>{12}</div>
        </div>

        <div className={style.info_group}>
          <label>Time (Hours)</label>
          <div>{1}</div>
        </div>

        <div className={style.info_group}>
          <label>Time (Minutes)</label>
          <div>60</div>
        </div>
      </section>
    </div>
  );
};
