import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Toastify from "toastify-js";
import { baseUrl } from "../api/baseUrl";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
// console.log(baseUrl, "<<<<<<<<<<<<< base url");

  async function login(e) {
    e.preventDefault();

    try {
      const { data } = await axios.post(`${baseUrl}/apis/login`, {
        email,
        password,
      });

      // console.log(base_url, "<<<<<<<<<<<<< base url");

      console.log(data, "<<<<<<<<<<<<<");

      localStorage.setItem("access_token", data.data.access_token);
      navigation("/");
    } catch (error) {
      console.log(error);
      Toastify({
        text: error.response?.data?.error || "Login failed. Please try again.",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#dc3545",
          borderRadius: "8px",
        },
      }).showToast();
    }
  }

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <h1 className="display-6 fw-bold text-danger mb-2">SpicyHaven</h1>
                  <p className="text-muted">Welcome back! Please login to continue.</p>
                </div>

                <form onSubmit={login} className="needs-validation">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="name@example.com"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="email">Email address</label>
                  </div>

                  <div className="form-floating mb-4">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="password">Password</label>
                  </div>

                  <div className="d-grid">
                    <button 
                      type="submit" 
                      className="btn btn-danger btn-lg"
                      style={{
                        background: 'linear-gradient(45deg, #dc3545, #fd7e14)',
                        border: 'none',
                        boxShadow: '0 4px 15px rgba(220, 53, 69, 0.2)'
                      }}
                    >
                      Sign In
                    </button>
                  </div>
                </form>

                <div className="text-center mt-4">
                  <p className="text-muted small mb-0">
                    Admin Panel • SpicyHaven Restaurant
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