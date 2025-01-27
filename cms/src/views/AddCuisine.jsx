import { useNavigate } from "react-router";
import Form from "../components/Form";
import axios from "axios";
import Toastify from "toastify-js";
import { baseUrl } from "../api/baseUrl"; 

export default function AddCuisine() {
  const navigate = useNavigate();

  async function handleSubmit(
    e,
    name,
    description,
    price,
    imgUrl,
    stock,
    categoryId
  ) {
    e.preventDefault();

    try {
      const body = { name, description, price, imgUrl, stock, categoryId };

      const { data } = await axios.post(
        `${baseUrl}/apis/restaurant-app/cuisines`,
        body,
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        }
      );

      Toastify({
        text: `${data.data.name} added successfully`,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#008000",
        },
        onClick: function () {}, // Callback after click
      }).showToast();

      navigate("/");
    } catch (error) {
      console.log(error);
      Toastify({
        text: error.response.data.error,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#FF0000",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    }
  }

  return (
    <>
      <Form
        baseUrl={baseUrl}
        formTitle="Add New Product"
        buttonText="Add Product"
        handleSubmit={handleSubmit}
      />
    </>
  );
}