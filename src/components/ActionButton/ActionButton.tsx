import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import classNames from "classnames";
import { ReactNode } from "react";
import styles from "./actionButton.module.css";

import React from 'react'


type ActionType = "edit" | "delete" | "create";

interface P {
    actionType: ActionType;
    onActionClick: ()=>void;
}

const iconMap: Record<P["actionType"], ReactNode | undefined> = {
  edit: <EditOutlined />,
  delete: <DeleteOutlined/>,
  create: <PlusOutlined data-testid="create"/>,
};

const classMap : Record<P["actionType"], string|undefined> = {
    edit: styles.edit,
    delete: styles.delete,
    create: styles.edit,
}

export const ActionButton = ({actionType,onActionClick} : P) => {
  return <div data-testid="test" onClick={onActionClick} className={classNames(styles.button, classMap[actionType])}>
   { iconMap[actionType]}
   Mirjeta
  </div>;
};
