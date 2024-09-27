import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = ({ setToken }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const storedData = JSON.parse(localStorage.getItem("userData"));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!storedData) {
      alert("No user data found. Please create an account.");
      return;
    }

    if (storedData.email !== email) {
      alert("Email not found.");
    } else if (storedData.password !== password) {
      alert("Password is incorrect.");
    } else {
      const token = "some-generated-token";
      localStorage.setItem("token", token);
      setToken(token);
      navigate("/pizzainfo");
    }
  };

  return (
    <div className="login">
      <div className="container form justify-content-center my-5 p-5 w-50 border rounded">
        <h4 className="text-center text-warning">LOGIN ACCOUNT</h4>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <p className="display-flex">
            <Link to="/register">Create new Account?</Link>
          </p>
          <button type="submit" className="btn btn-warning">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
