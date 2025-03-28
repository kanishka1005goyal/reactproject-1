
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.username || !formData.email || !formData.password) {
      alert("All fields are required!");
      return;
    }

    localStorage.setItem("username", formData.username);

    console.log("User Logged In:", formData);
    navigate("/home");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-6 col-lg-5">
        <div className="card p-4 shadow border-0">
          <h2 className="text-center fw-bold mb-4">Connect your Google account</h2>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold">Username</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Enter username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="6+ characters"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" required />
              <label className="form-check-label">
                I agree with Dribbble's <a href="#">Terms of Service</a>, <a href="#">Privacy Policy</a>, and default <a href="#">Notification Settings</a>.
              </label>
            </div>

            <button type="submit" className="btn btn-dark w-100 py-2">
              Create Account
            </button>

            <p className="text-center mt-3">
              Already have an account? <a href="#" className="text-decoration-none">Sign In</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;