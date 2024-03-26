import axios from "axios";
import { useState } from "react";

const LoginForm = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const login = (event) => {
    event.preventDefault();

    const user = "manolo@test.es";
    const password = "Upgrade1234!";
    const url = "https://node-tickets-nu.vercel.app/user/login";

    try {
      const res = axios
        .post(url, {
          user,
          password,
        })
        .then((res) => sessionStorage.setItem("token", res.data.data.token));
      //   console.log(res.data.token);
      //   const token = res.data.token;
      //   sessionStorage.setItem("token", token);

      //   console.log(token)
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <>
      <div className="login-container">
        <h1>LOGIN</h1>
        <form onSubmit={login}>
          <input
            type="text"
            value={user}
            onChange={(event) => setUser(event.target.value)}
            placeholder="Introduzca su usuario"
            required
          ></input>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Introduzca su password"
            required
          ></input>
          <button type="submit">LOGIN</button>
        </form>
        {error && <div>Ha ocurrido un error</div>}
      </div>
    </>
  );
};

export default LoginForm;
