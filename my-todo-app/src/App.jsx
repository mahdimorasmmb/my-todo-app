import React, { useEffect, useState } from "react";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { nanoid } from "nanoid";
import { Login } from "./components/Login";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [users, setUser] = useState([
    {
      username: "mahdi",
      password: "1234",
    },
  ]);
  let date = new Date();
  const [listTaske, setListTaske] = useState(
    JSON.parse(localStorage.getItem("listTaske")) || []
  );
  useEffect(() => {
    window.localStorage.setItem("listTaske", JSON.stringify(listTaske));
  }, [listTaske]);

  const handleTaske = (newTaske, date, time) => {
    if (newTaske) {
      setListTaske([
        ...listTaske,
        {
          id: nanoid(),
          text: newTaske,
          checked: false,
          myDate: date,
          myTime: time,
          isEdite: false,
        },
      ]);
      console.log(listTaske);
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

  const handleEdite = (id) => {
    const newListTaske = listTaske.map((taske) => {
      if (taske.id === id) {
        return { ...taske, isEdite: !taske.isEdite };
      }
      return taske;
    });
    setListTaske(newListTaske);
  };
  const edited = (id, value) => {
    const newListTaske = listTaske.map((taske) => {
      if (taske.id === id) {
        return { ...taske, text: value };
      }
      return taske;
    });
    setListTaske(newListTaske);
  };
  const handleLogin = (user, pas) => {
    users.map((item) => {
      if (user === item.username && pas === item.password) {
        console.log(user === item.username && pas === item.password);
        setIsLogin(true);
      } else {
        alert("نام کاربری نامعتبر می باشد ");
      }
    });
  };

  const handleSignin = (user, pas) => {
    users.map((item) => {
      if (item.username !== user) {
        setUser([
          ...users,
          {
            username: user,
            password: pas,
          },
        ]);
        alert("کابر جدید ثبت شد ");
        console.log(users);
      } else {
        alert("کاربری با این نامکاربری  وجود دارد ");
      }
    });
  };

  const mytime = (myDate, myTime, setcheckbox, checkbox) => {
    const timer = setInterval(() => {
      let newTime = new Date();
      newTime.setMonth(newTime.getMonth() + 1);
      newTime.setSeconds(0);
      newTime.setMilliseconds(0);
      const date = myDate.split("-");
      const time = myTime.split(":");
      const inDate = new Date(date[0], date[1], date[2], time[0], time[1]);

      if (newTime.getTime() === inDate.getTime() && !checkbox) {
        setcheckbox(true);
        clearInterval(timer);
        alert("ok");
      } else {
        console.log("mmb");
      }
    }, 5000);
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
                      edited={edited}
                      handleEdite={handleEdite}
                      mytime={mytime}
                      listTaske={listTaske}
                      handleDletedTaske={handleDletedTaske}
                      handleChecked={handleChecked}
                    />
                  </>
                ) : (
                  <Login
                    handleLogin={handleLogin}
                    handleSignin={handleSignin}
                  />
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
