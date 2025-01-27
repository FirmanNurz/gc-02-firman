import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Toastify from "toastify-js";
import { baseUrl } from "../api/baseUrl";

export default function AddUser() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(
    e,
    username,
    email,
    password,
    phoneNumber,
    address
  ) {
    e.preventDefault();
    try {
      const body = { username, email, password, phoneNumber, address };

      const { data } = await axios.post(`${baseUrl}/apis/add-user`, body, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      console.log(data);

      Toastify({
        text: `Success add new user`,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#008000",
        },
      }).showToast();

      navigate("/");
    } catch (error) {
      console.log(error);
      Toastify({
        text: error.response.data.error,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#FF0000",
        },
      }).showToast();
    }
  }

  return (
    <div className="min-vh-100 bg-light d-flex align-items-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="card border-0 shadow-lg rounded-4">
              <div className="card-header bg-white border-0 text-center pt-4 pb-3">
                <button 
                  onClick={() => navigate('/')} 
                  className="btn btn-outline-secondary btn-sm position-absolute top-0 end-0 mt-3 me-3"
                >
                  <i className="bi bi-x-lg"></i>
                </button>
                <div className="mb-3">
                  <span className="badge bg-danger px-3 py-2 rounded-pill">Add New Staff</span>
                </div>
                <h4 className="card-title mb-1">Staff Details</h4>
                <p className="text-muted small">Fill in the staff information below</p>
              </div>

              <div className="card-body p-4">
                <form onSubmit={(e) =>
                  handleSubmit(e, username, email, password, phoneNumber, address)
                }>
                  <div className="row g-4">
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          placeholder="Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                        <label htmlFor="username">Username</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="email">Email</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="password">Password</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="tel"
                          className="form-control"
                          id="phoneNumber"
                          placeholder="Phone Number"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <label htmlFor="phoneNumber">Phone Number</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          id="address"
                          placeholder="Address"
                          style={{ height: '100px' }}
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        ></textarea>
                        <label htmlFor="address">Address</label>
                      </div>
                    </div>
                  </div>

                  <div className="d-grid gap-2 mt-4">
                    <button
                      type="submit"
                      className="btn btn-danger btn-lg"
                    >
                      <i className="bi bi-person-plus-fill me-2"></i>
                      Add Staff
                    </button>
                    <button 
                      type="button"
                      onClick={() => navigate('/')}
                      className="btn btn-light"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}