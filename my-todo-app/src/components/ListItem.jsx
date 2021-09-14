import React, { useEffect, useState } from "react";

export const ListItem = ({ list, handleDletedTaske, handleChecked }) => {
  const [checkbox, setcheckbox] = useState(list.checked);
  setInterval(() => {
    let newTime = new Date();
    newTime.setMonth(newTime.getMonth() + 1);
    const date = list.myDate.split("-");
    const time = list.myTime.split(":");
    const inDate = new Date(date[0], date[1], date[2], time[0], time[1]);
    console.log(inDate.getMinutes());
    console.log(newTime.getMinutes());
    if (
      inDate.getFullYear() === newTime.getFullYear() &&
      inDate.getMonth() === newTime.getMonth() &&
      inDate.getDay() === newTime.getDay() &&
      inDate.getHours() === newTime.getHours() &&
      inDate.getMinutes() === newTime.getMinutes()
    ) {
      alert("ok");
    }
  }, 5000);
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
          {list.text} {list.myDate} {list.myTime}
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
