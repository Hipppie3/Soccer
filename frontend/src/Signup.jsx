import React, { useState } from "react";

function SignUp({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
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
              console.log("***errors: ", data.errors)
              setErrors(data.errors)
            });
        }
      })
    }

  return (
    <div>
      <h1 className="signUpE">
      <ul>
        {errors.map((error =>
        <li >{error}</li>
        ))
      }
      </ul>
      </h1>
      <form onSubmit={handleSubmit}>
        <h1 className="signup">Sign Up</h1>
        <input
          className="input1"
          placeholder="Enter Username"
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Enter Password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <input
          placeholder="Re-enter Password"
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <button className="formBtn" type="submit">KICK START NOW</button>
      </form>
    </div>
  );
}

export default SignUp;