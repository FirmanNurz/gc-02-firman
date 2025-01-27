import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router";
import Toastify from "toastify-js";
import { baseUrl } from "../api/baseUrl";

export default function HomePage() {
  // console.log(base_url, "<<<<<<<<<<<<< base url");
  
  const [loading, setLoading] = useState(false);
  const [cuisine, setCuisine] = useState([]);

  async function fetchCuisine() {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${baseUrl}/apis/restaurant-app/cuisines`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        }
      );
      setCuisine(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function priceBeingRupiah(price) {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    });

    return formatter.format(price);
  }

  const navigate = useNavigate();

  function handleEdit(e, id) {
    e.preventDefault();
    navigate(`/cuisines/${id}/edit`);
  }

  async function handleDelete(e, id) {
    e.preventDefault();
    try {
          await axios.delete(
        `${baseUrl}/apis/restaurant-app/cuisines/${id}`,{
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          }
        });


      Toastify({
        text: 'Successfully deleted',
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "green",
        },
      }).showToast();

      fetchCuisine();

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCuisine();
  }, []);

  return (
    <div className="min-vh-100 bg-light py-5">
      <div className="container" style={{ maxWidth: '1200px' }}>
        {loading ? (
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '60vh' }}>
            <div className="spinner-border text-danger" style={{ width: '3rem', height: '3rem' }} role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="h5 mt-4 text-danger fw-light">Loading your Cuisines...</p>
          </div>
        ) : (
          <>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h2 className="display-6 mb-1">Cuisine Management</h2>
                <p className="text-muted mb-0">Manage and organize your Cuisine inventory</p>
              </div>
              <Link
              to={"/cuisines/add"}
              >
              <button className="btn btn-danger d-flex align-items-center gap-2 rounded-3 px-4">
                <i className="bi bi-plus-circle-fill"></i>
                Add New Cuisine
              </button>
              </Link>
            </div>

            <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
              <div className="card-header bg-white border-0 ">
                <div className="row align-items-center">
                  <div className="col">
                    <div className="input-group">
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="btn-group">
                      <button className="btn btn-light">
                        <i className="bi bi-funnel"></i>
                      </button>
                      <button className="btn btn-light">
                        <i className="bi bi-sort-down"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-hover align-middle mb-0">
                    <thead className="bg-danger bg-opacity-10 text-danger">
                      <tr>
                        <th className="py-3 ps-4">Image</th>
                        <th className="py-3">Cuisine Name</th>
                        <th className="py-3">Description</th>
                        <th className="py-3">Price</th>
                        <th className="py-3">Stock</th>
                        <th className="py-3 pe-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="border-top-0">
                      {cuisine
                        .slice()
                        .reverse()
                        .map((el, index) => (
                          <tr key={el.id} className={index % 2 === 0 ? 'bg-light bg-opacity-50' : ''}>
                            <td className="ps-4">
                              <div className="position-relative">
                                <img 
                                  src={el.imgUrl} 
                                  alt={el.name} 
                                  className="rounded-3 shadow-sm"
                                  style={{ 
                                    width: '65px', 
                                    height: '65px', 
                                    objectFit: 'cover',
                                    border: '3px solid white'
                                  }}
                                />
                              </div>
                            </td>
                            <td>
                              <p className="fw-semibold text-dark mb-0">{el.name}</p>
                              <small className="text-muted">ID: #{el.id}</small>
                            </td>
                            <td>
                              <p className="text-muted mb-0" style={{ maxWidth: '250px' }}>
                                {el.description.length > 100 
                                  ? el.description.substring(0, 100) + '...' 
                                  : el.description}
                              </p>
                            </td>
                            <td>
                              <span className="fw-semibold text-danger">{priceBeingRupiah(el.price)}</span>
                            </td>
                            <td>
                                <h2>
                                  </h2>{el.stock}
                            </td>
                            <td className="pe-4">
                              <div className="d-flex gap-2">
                                <button
                                  className="btn btn-outline-secondary btn-sm rounded-3 d-flex align-items-center gap-2"
                                  onClick={(event) => handleEdit(event, el.id)}
                                >
                                  <i className="bi bi-pencil-square"></i>
                                  Edit
                                </button>
                                <button
                                  className="btn btn-danger btn-sm rounded-3 d-flex align-items-center gap-2"
                                  onClick={(event) => handleDelete(event, el.id)}
                                >
                                  <i className="bi bi-trash"></i>
                                  Delete
                                </button>
                                <Link 
                                  to={`/cuisines/${el.id}/upload`}
                                  className="btn btn-outline-dark btn-sm rounded-3 d-flex align-items-center gap-2"
                                >
                                  <i className="bi bi-image"></i>
                                  Image
                                </Link>
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="card-footer bg-white border-0 py-3">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="text-muted mb-0">Showing {cuisine.length} Cuisines</p>
                  <nav>
                    <ul className="pagination mb-0">
                      <li className="page-item disabled">
                        <a className="page-link" href="#" tabIndex="-1">Previous</a>
                      </li>
                      <li className="page-item active"><a className="page-link" href="#">1</a></li>
                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}