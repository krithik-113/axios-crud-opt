import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import Info from "./Components/Info";
import Add from "./Components/Add";
import Save from "./Components/Save";

function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState([]);
  const API_URL = `${process.env.PUBLIC_URL}/db.json`;
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => setUser(response.data))
      .catch((err) => console.log(`Error: ${err.message}`));
  }, []);

  // ------------------------------------------------------------

  let [userName, setUserName] = useState('')
  let [userEmail, setUserEmail] = useState('')

  function handleAddData(name, email) {
    let listItem = [...user]
    listItem.push({
      id: user.length + 1,
      name: name,
      email : email
    })
    setUser(listItem.reverse())
    setUserName('')
    setUserEmail('')
    console.log(user)
    navigate('/')
  }

  return (
    <div className="App">
      <header>
        <h1>User List</h1>
        <div className="nav">
          <Link to="/">
            <div>
              <h1>Home</h1>
            </div>
          </Link>

          <Link to="/add">
            <div>
              <h1>Add</h1>
            </div>
          </Link>
        </div>
      </header>
      <Routes>
        <Route
          path="/"
          element={user.map((val) => {
            return (
              <Home
                key={`${val.id}-${val.name}`}
                id={val.id}
                name={val.name}
                email={val.email}
              />
            );
          })}
        />

        <Route
          path="/add"
          element={
            <Add
              userName={userName}
              setUserName={setUserName}
              userEmail={userEmail}
              setUserEmail={setUserEmail}
              handleAddData={handleAddData}
            />
          }
        />
        <Route path="/home/:id" element={<Info user={user} />} />
        <Route path="/save" element={ <Save/>} />
      </Routes>
    </div>
  );
}

export default App;
