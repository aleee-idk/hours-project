import style from "./Item.module.css";

interface Props {
  idx: number;
}

export const Item = ({ idx }: Props) => {
  return (
    <div className={[style.item, style.grid].join(" ")}>
      <div className={style.group}>
        <label htmlFor={`subtask-${idx}-name`}>Name</label>
        <input type="text" id={`subtask-${idx}-name`} name="task-name" />
      </div>

      <div className={style.buttons_container}>
        <button>Copy</button>
        <button>Delete</button>
      </div>

      <div className={style.group}>
        <label htmlFor={`subtask-${idx}-dificulty`}>Name</label>
        <select id={`subtask-${idx}-dificulty`} name="dificulty"></select>
      </div>
      <div className={style.group}>
        <label htmlFor={`subtask-${idx}-name`}>Name</label>
        <select id={`subtask-${idx}-dificulty`} name="dificulty"></select>
      </div>
      <div className={style.group}>
        <label htmlFor={`subtask-${idx}-hours`}>Time (hours)</label>
        <div>{12}</div>
      </div>
      <div className={style.group}>
        <label htmlFor={`subtask-${idx}-minutes`}>Time (minutes)</label>
        <div>{12}</div>
      </div>
    </div>
  );
};
