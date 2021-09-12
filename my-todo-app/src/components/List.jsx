import React from "react";
import { ListItem } from "./ListItem";

export const List = ({ listTaske, handleDletedTaske, handleChecked }) => {
  return (
    <div className="list-wrapper">
      <ul className="d-flex flex-column-reverse todo-list">
        {listTaske.map((list) => (
          <ListItem
            key={list.id}
            list={list}
            handleDletedTaske={handleDletedTaske}
            handleChecked={handleChecked}
          />
        ))}
      </ul>
    </div>
  );
};
