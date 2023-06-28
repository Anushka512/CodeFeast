import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { useDispatch, useSelector } from "react-redux";
import { clearError, getLoggedInrUser } from "../../Redux/slices/user";

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { isAuthenticated, error } = useSelector((state) => state.user);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      dispatch(
        getLoggedInrUser({
          email,
          password,
        })
      );

      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin");
      dispatch(clearError());
    }

    if (error) {
      alert(error);
      dispatch(clearError());
    }
  }, [isAuthenticated, error,navigate,dispatch]);

  return (
    <div className="Login">
      <div className="login-box">
        <h2 className="heading">Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input type="submit" className="submit" />
        </form>
      </div>
    </div>
  );
}

export default Login;
