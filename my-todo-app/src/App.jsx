import React, { useEffect, useReducer, useState } from "react";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { nanoid } from "nanoid";
import listTodoReducer from "./redocers/listTodoReducer";

function App() {
  const [listTaske, dispatch] = useReducer(
    listTodoReducer,
    JSON.parse(localStorage.getItem("listTaske")) || []
  );
  useEffect(() => {
    window.localStorage.setItem("listTaske", JSON.stringify([...listTaske]));
  }, [listTaske]);

  const handleTaske = (newTaske) => {
    if (newTaske) {
      dispatch({
        type: "add",
        paylod: newTaske,
      });
    } else {
      alert("Plese complet form");
    }
  };

  const handleDletedTaske = (id) => {
    dispatch({
      type: "remove",
      paylod: id,
    });
  };

  const handleChecked = (id) => {
    dispatch({
      type: "cheked",
      paylod: id,
    });
  };
  return (
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-md-12">
            <div className="card px-3">
              <div className="card-body">
                <h4 className="card-title">Awesome Todo list</h4>
                <Form handleTaske={handleTaske} />
                <List
                  listTaske={listTaske}
                  handleDletedTaske={handleDletedTaske}
                  handleChecked={handleChecked}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
