import React, { useEffect, useState } from "react";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import Divisions from "./pages/Divisions"
import Players from "./pages/Players"
import Teams from "./pages/Teams"
import SignIn from "./SignIn"

function App() {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   // auto-login
  //   fetch("/api/me").then((r) => {
  //   if (r.ok) {
  //   r.json().then((user) => setUser(user));
  //       }
  //     });
  //   }, []);
console.log("***user: ", user)
  return (
    <BrowserRouter>
      <NavBar user={user} setUser={setUser}/>
    <main className="homePage">
      {user ? (
        <Switch>
          <Route path="/">
            <SignIn user={user}/>
          </Route>
       </Switch>
      ) : (
        <>
        <Switch>
          <Route path="/signup">
            <SignUp setUser={setUser} />
          </Route>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
        <div>
          
        </div>
        </>
      )}
        <Switch>
          <Route path="/players">
            <Players />
          </Route>
          <Route path="/teams">
            <Teams />
          </Route>
          <Route path="/divisions">
            <Divisions />
          </Route>
        </Switch>
    </main> 
    </BrowserRouter>
  );
}

export default App;



