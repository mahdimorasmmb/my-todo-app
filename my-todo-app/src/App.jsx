import React, { useEffect, useState } from "react";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { nanoid } from "nanoid";
import { Login } from "./components/Login";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const users = [
    {
      username: "mahdi",
      password: "1234",
    },
  ];
  const [listTaske, setListTaske] = useState(
    JSON.parse(localStorage.getItem("listTaske")) || []
  );
  useEffect(() => {
    window.localStorage.setItem("listTaske", JSON.stringify(listTaske));
  }, [listTaske]);

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

  const handleChecked = (id) => {
    const newListTaske = listTaske.map((taske) => {
      if (taske.id === id) {
        return { ...taske, checked: !taske.checked };
      }
      return taske;
    });
    setListTaske(newListTaske);
    console.log(newListTaske);
  };
  const handleLogin = (user, pas) => {
    users.map((item) => {
      if (user === item.username && pas === item.password) {
        console.log(user === item.username && pas === item.password);
        setIsLogin(true);
      } else {
        alert("asteb");
      }
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
                {isLogin ? (
                  <>
                    <Form handleTaske={handleTaske} />
                    <List
                      listTaske={listTaske}
                      handleDletedTaske={handleDletedTaske}
                      handleChecked={handleChecked}
                    />
                  </>
                ) : (
                  <Login handleLogin={handleLogin} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
