import React from "react";
import { ListItem } from "./ListItem";

export const List = () => {
  return (
    <div className="list-wrapper">
      <ul className="d-flex flex-column-reverse todo-list">
        <ListItem />
      </ul>
    </div>
  );
};
