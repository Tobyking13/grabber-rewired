import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpLogin.css";

function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  function Signup() {
    navigate("/SignUp");
  }

  function homeButton() {
    navigate("/");
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if (loggeduser === null) {
      alert("login information not found, please sign up");
    } else if (
      input.email === loggeduser.email &&
      input.password === loggeduser.password
    ) {
      localStorage.setItem("loggedin", true);
      navigate("/RecipeSearchContainer");
      window.location.reload();
    } else {
      alert("Your username or password are incorrect. Please try again");
    }
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-top">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card shadow-lg" id="logincard">
              <div className="card-body p-5">
                <form className="mb-3 mt-md-4" onSubmit={handleLogin}>
                  <h2 className="fw-bold mb-2 text-uppercase ">
                    Grabber Rewired Login
                  </h2>
                  <p className=" mb-5">Please enter your email and password</p>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label ">
                      Email address
                    </label>
                    <input
                      name="email"
                      value={input.email}
                      onChange={(e) =>
                        setInput({ ...input, [e.target.name]: e.target.value })
                      }
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="name@example.com"
                      required={true}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label ">
                      Password
                    </label>
                    <input
                      name="password"
                      value={input.password}
                      onChange={(e) =>
                        setInput({ ...input, [e.target.name]: e.target.value })
                      }
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="*******"
                      autoComplete="on"
                      required={true}
                    />
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-outline-dark" type="submit">
                      Login
                    </button>
                  </div>
                </form>
                <div>
                  <p className="mb-0  text-center">
                    Don't have an account?
                    <button
                      onClick={Signup}
                      className="fw-bold signup-login-box-btn"
                    >
                      Register Here
                    </button>
                  </p>
                  <p>
                    <button
                      className="signup-login-box-btn"
                      onClick={homeButton}
                    >
                      HOME PAGE
                    </button>
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
