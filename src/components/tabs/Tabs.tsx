import React, { useState, MouseEvent, Children, ReactElement } from "react";
import style from "./Tab.module.css";

interface Props {
  children: ReactElement | ReactElement[];
}

interface mapChildrenProps<P = any> {
  (child: ReactElement<P>, idx: number): any;
}

export const Tabs = ({ children }: Props) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const mapChildren = (func: mapChildrenProps) => {
    return Children.map(children, func);
  };

  const getChildren = (searchIdx: number) => {
    const items = Children.toArray(children);

    return items[searchIdx];
  };

  const handleSetActive = ({ currentTarget }: MouseEvent<HTMLDivElement>) => {
    const idx = parseInt(currentTarget.dataset.idx!);

    setSelectedTab(idx);
  };

  return (
    <div className="w-100">
      <nav className={style.nav}>
        {mapChildren((child, idx) => {
          const styles = [style.nav_item];

          if (idx === selectedTab) styles.push(style.active);

          return (
            <div
              className={styles.join(" ")}
              onClick={handleSetActive}
              data-idx={idx}
            >
              {child.props.title}
            </div>
          );
        })}
      </nav>

      <div className={style.content}>{getChildren(selectedTab)}</div>
    </div>
  );
};
