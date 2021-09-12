import React, { useState } from "react";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { nanoid } from "nanoid";

function App() {
  const [listTaske, setListTaske] = useState([]);
  const handleTaske = (newTaske) => {
    if (newTaske) {
      setListTaske([
        ...listTaske,
        {
          id: nanoid(),
          text: newTaske,
          checked: false,
        },
      ]);
    } else {
      alert("Plese complet form");
    }
  };
  const handleDletedTaske = (id) => {
    const newListTaske = listTaske.filter((taske) => {
      return taske.id !== id;
    });
    setListTaske(newListTaske);
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
