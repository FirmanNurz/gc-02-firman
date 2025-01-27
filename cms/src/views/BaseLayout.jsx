import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import Toastify from "toastify-js";


export default function BaseLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.access_token) {
      Toastify({
        text: "Please login first",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Time in seconds to stop the toast
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
          color: "white",
          border: "1px solid #96c93d",
          borderRadius: "2px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        },
      }).showToast();
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
