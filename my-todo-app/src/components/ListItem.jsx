import React, { useEffect, useState } from "react";

export const ListItem = ({
  list,
  handleDletedTaske,
  handleChecked,
  mytime,
  handleEdite,
  edited,
}) => {
  const [checkbox, setcheckbox] = useState(list.checked);
  const [edit, setEdite] = useState(list.text);
  if (!checkbox) {
    mytime(list.myDate, list.myTime, setcheckbox, checkbox);
  }
  console.log("mm");

  return (
    <li className={checkbox ? "completed" : ""}>
      <div className="form-check">
        {" "}
        <label className="form-check-label">
          <input
            checked={checkbox}
            onChange={(e) => {
              setcheckbox(e.target.checked);
              handleChecked(list.id);
            }}
            className="checkbox"
            type="checkbox"
          />

          <i className="input-helper"></i>
        </label>{" "}
        <input
          style={{ outline: "none", border: "none", padding: "20px 5px" }}
          readOnly={list.isEdite}
          value={edit}
          onChange={(e) => {
            setEdite(e.target.value);
          }}
          onClick={() => {
            handleEdite(list.id);
          }}
        />
      </div>{" "}
      <i
        className="remove mdi mdi-close-circle-outline"
        onClick={() => {
          handleDletedTaske(list.id);
        }}
      ></i>
      <button
        className="add btn btn-primary font-weight-bold todo-list-add-btn"
        onClick={() => {
          edited(list.id, edit);
        }}
      >
        edit
      </button>
    </li>
  );
};
