import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { setUser } from "../redux/authSlece";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [ error, setError ] = useState<string>("");

  const navigate = useNavigate();
  const dispath = useDispatch();

  const handleLogin = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const accessToken = await userCredential.user.getIdToken();

      const userData = {
        email: userCredential.user.email,
        uid: userCredential.user.uid,
        accessToken: accessToken,
      }

      dispath(setUser(userData))
      navigate("/")


    } catch ( error ) {
      setError("Неправильный адрес электронной почты или пароль")
    }
  };
  return (
    <div className="page">
      <div className="container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              type="email"
              id="email"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              type="password"
              id="password"
            ></input>
          </div>
          {error && <p className="error">{error}</p> }
          <button onClick={handleLogin} className="button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
