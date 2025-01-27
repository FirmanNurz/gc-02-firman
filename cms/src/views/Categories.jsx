import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../api/baseUrl";
import { useNavigate } from "react-router";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  async function fetchCategories() {
    try {
      const { data } = await axios.get(
        `${baseUrl}/apis/restaurant-app/categories`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );

      setCategories(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

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
                  <span className="badge bg-danger px-3 py-2 rounded-pill">Categories</span>
                </div>
                <h4 className="card-title mb-1">Category List</h4>
                <p className="text-muted small">View all available categories</p>
              </div>

              <div className="card-body p-4">
                <div className="table-responsive">
                  <table className="table table-hover align-middle mb-0">
                    <thead className="table-light">
                      <tr>
                        <th className="text-center" style={{ width: "80px" }}>ID</th>
                        <th>Category Name</th>
                        <th className="text-end" style={{ width: "100px" }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories.map((category) => (
                        <tr key={category.id}>
                          <td className="text-center">{category.id}</td>
                          <td>{category.name}</td>
                          <td className="text-end">
                            <button 
                              className="btn btn-sm btn-outline-danger"
                              title="Delete category"
                            >
                              <i className="bi bi-trash3"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="d-grid mt-4">
                  <button 
                    className="btn btn-danger"
                    onClick={() => {/* Add category handler */}}
                  >
                    <i className="bi bi-plus-circle-fill me-2"></i>
                    Add New Category
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}