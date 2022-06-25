import React from "react";

export interface TabProps {
  children?: React.ReactNode;
  title: string;
  active?: boolean;
}

export const Tab = (props: TabProps) => {
  return <>{props.children}</>;
};

Tab.defaultProps = {
  active: false,
};
