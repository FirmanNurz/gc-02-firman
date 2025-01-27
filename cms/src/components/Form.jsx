import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Form({
  baseUrl,
  formTitle,
  buttonText,
  handleSubmit,
  product,
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [categoryId, setCategoryId] = useState(1);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  async function fetchCategories() {
    try {
      const { data } = await axios.get(
        `${baseUrl}/apis/restaurant-app/categories`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
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

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setImgUrl(product.imgUrl);
      setPrice(product.price);
      setStock(product.stock);
      setCategoryId(product.categoryId);
    }
  }, [product]);

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
                  <span className="badge bg-danger px-3 py-2 rounded-pill">{formTitle} Cuisine</span>
                </div>
                <h4 className="card-title mb-1">Cuisine Details</h4>
                <p className="text-muted small">Fill in the cuisine information below</p>
              </div>

              <div className="card-body p-4">
                <form onSubmit={(event) =>
                  handleSubmit(
                    event,
                    name,
                    description,
                    price,
                    imgUrl,
                    stock,
                    categoryId
                  )
                }>
                  <div className="row g-4">
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Cuisine Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="name">Cuisine Name</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          id="description"
                          placeholder="Description"
                          style={{ height: '100px' }}
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                        <label htmlFor="description">Description</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="imgUrl"
                          placeholder="Image URL"
                          value={imgUrl}
                          onChange={(e) => setImgUrl(e.target.value)}
                        />
                        <label htmlFor="imgUrl">Image URL</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="number"
                          className="form-control"
                          id="price"
                          placeholder="Price"
                          value={price}
                          onChange={(e) => setPrice(Number(e.target.value))}
                        />
                        <label htmlFor="price">Price (IDR)</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="number"
                          className="form-control"
                          id="stock"
                          placeholder="Stock"
                          value={stock}
                          onChange={(e) => setStock(Number(e.target.value))}
                        />
                        <label htmlFor="stock">Stock</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <select
                          className="form-select"
                          id="categoryId"
                          value={categoryId}
                          onChange={(e) => setCategoryId(Number(e.target.value))}
                        >
                          {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                        <label htmlFor="categoryId">Category</label>
                      </div>
                    </div>
                  </div>

                  <div className="d-grid gap-2 mt-4">
                    <button
                      type="submit"
                      className="btn btn-danger btn-lg"
                    >
                      <i className="bi bi-check2-circle me-2"></i>
                      {buttonText}
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