import React, { useEffect, useState } from "react";

export const ListItem = ({ list, handleDletedTaske, handleChecked }) => {
  const [checkbox, setcheckbox] = useState(list.checked);

  const timer = setInterval(() => {
    let newTime = new Date();
    newTime.setMonth(newTime.getMonth() + 1);
    newTime.setSeconds(0);
    newTime.setMilliseconds(0);
    const date = list.myDate.split("-");
    const time = list.myTime.split(":");
    const inDate = new Date(date[0], date[1], date[2], time[0], time[1]);

    if (newTime.getTime() === inDate.getTime() && !checkbox) {
      setcheckbox(true);
      clearInterval(timer);
      alert("ok");
    } else {
      console.log("mmb");
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
