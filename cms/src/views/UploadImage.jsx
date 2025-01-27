import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import Toastify from "toastify-js";
import { baseUrl } from "../api/baseUrl";

export default function UploadImage() {
  const { id } = useParams(); 
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [imageUpload, setImageUpload] = useState({});
  const [uploading, setUploading] = useState(false);

  const navigate = useNavigate();

  async function fetchImage() {
    try {
      const { data } = await axios.get(
        `${baseUrl}/apis/restaurant-app/cuisines/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );

      setName(data.data.name);
      setImgUrl(data.data.imgUrl);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleImageSelect(event) {
    try {
      event.preventDefault();
      const image = event.target.files[0];
      setImageUpload(image);
      if (image) {
        const imgUrl = URL.createObjectURL(image);
        setImgUrl(imgUrl);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(event) {
    try {
      setUploading(true);
      event.preventDefault();
      const formData = new FormData();
      formData.append("file", imageUpload);

      const { data } = await axios.patch(
        `${baseUrl}/apis/restaurant-app/cuisines/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        }
      );

      Toastify({
        text: `${data.message}`,
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
    } finally {
      setUploading(false);
    }
  }

  useEffect(() => {
    fetchImage();
  }, [id]);

  return (
    <div className="min-vh-100 bg-light d-flex align-items-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card border-0 shadow-lg rounded-4">
              <div className="card-header bg-white border-0 text-center pt-4 pb-3">
                <button 
                  onClick={() => navigate('/')} 
                  className="btn btn-outline-secondary btn-sm position-absolute top-0 end-0 mt-3 me-3"
                >
                  <i className="bi bi-x-lg"></i>
                </button>
                <div className="mb-3">
                  <span className="badge bg-danger px-3 py-2 rounded-pill">Edit Image</span>
                </div>
                <h4 className="card-title mb-1">{name}</h4>
                <p className="text-muted small">Update the cuisine image</p>
              </div>
              
              <div className="card-body px-4 py-4">
                <div className="text-center mb-4">
                  <div className="position-relative d-inline-block">
                    <img
                      src={imgUrl || 'https://via.placeholder.com/200'}
                      alt={name}
                      className="rounded-3 shadow-sm img-fluid"
                      style={{ 
                        width: '200px', 
                        height: '200px', 
                        objectFit: 'cover',
                        border: '3px solid white'
                      }}
                    />
                    <div className="position-absolute bottom-0 end-0 mb-2 me-2">
                      <div className="bg-dark bg-opacity-75 rounded-circle p-2">
                        <i className="bi bi-camera-fill text-white"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <form className="mt-4">
                  <div className="mb-4">
                    <div className="input-group">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(event) => handleImageSelect(event)}
                        className="form-control form-control-lg"
                        id="imageInput"
                      />
                    </div>
                    <div className="form-text text-muted">
                      Supported formats: JPG, PNG, GIF (max. 5MB)
                    </div>
                  </div>

                  <div className="d-grid gap-2">
                    <button
                      onClick={(event) => handleSubmit(event)}
                      className="btn btn-danger btn-lg position-relative"
                      disabled={uploading}
                    >
                      {uploading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Uploading...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-cloud-arrow-up-fill me-2"></i>
                          Save Changes
                        </>
                      )}
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