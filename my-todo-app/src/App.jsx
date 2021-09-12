import React, { useState } from "react";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { nanoid } from "nanoid";

function App() {
  const [listTaske, setListTaske] = useState([]);
  const handleTaske = (newTaske) => {
    setListTaske([
      ...listTaske,
      {
        id: nanoid(),
        text: newTaske,
      },
    ]);
  };
  console.log(listTaske);
  return (
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-md-12">
            <div className="card px-3">
              <div className="card-body">
                <h4 className="card-title">Awesome Todo list</h4>
                <Form handleTaske={handleTaske} />
                <List />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
