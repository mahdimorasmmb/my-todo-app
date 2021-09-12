import React, { useEffect, useState } from "react";

export const ListItem = ({ list, handleDletedTaske, handleChecked }) => {
  const [checkbox, setcheckbox] = useState(list.checked);

  return (
    <li className={checkbox ? "completed" : ""}>
      <div className="form-check">
        {" "}
        <label className="form-check-label">
          {" "}
          <input
            checked={checkbox}
            onChange={(e) => {
              setcheckbox(e.target.checked);
              handleChecked(list.id);
            }}
            className="checkbox"
            type="checkbox"
          />
          {list.text}
          <i className="input-helper"></i>
        </label>{" "}
      </div>{" "}
      <i
        className="remove mdi mdi-close-circle-outline"
        onClick={() => {
          handleDletedTaske(list.id);
        }}
      ></i>
    </li>
  );
};
