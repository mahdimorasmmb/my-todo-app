import React from "react";

export const ListItem = () => {
  return (
    <li className="completed">
      <div className="form-check">
        {" "}
        <label className="form-check-label">
          {" "}
          <input className="checkbox" type="checkbox" />
          For what reason would it be advisable.{" "}
          <i className="input-helper"></i>
        </label>{" "}
      </div>{" "}
      <i className="remove mdi mdi-close-circle-outline"></i>
    </li>
  );
};
