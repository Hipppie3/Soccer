import React, { useState } from "react";

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      // clear errors
      console.log("***test")
      if (res.ok) {
          console.log("***response status", res.status)
          res.json()
          .then((user) => {
            console.log("***user: ", user)
            setUser(user)
            });
          // route to profile
        } else {
          console.log("***response status", res.status)
          res.json()
            .then((data) => {
              console.log("***errors: ", data.error)
              setErrors(data.error)
            });
        }
      })
    }

  return (
    <div>
      <h1 className="loginE">
      {errors}
      </h1>
      
      <form onSubmit={handleSubmit}>
        <h1 className="login">Login</h1>
        <label htmlFor="username"></label>
        <input
         placeholder="Username"
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password" ></label>
        <input
          placeholder="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;