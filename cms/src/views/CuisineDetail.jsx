import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { baseUrl } from "../api/baseUrl";
export default function CuisineDetail() {
  const { id } = useParams();
  const [cuisine, setCuisine] = useState({});

  const getCuisine = async (id) => {
    try {
      const res = await axios.get(`${baseUrl}/apis/restaurant-app/cuisines/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setCuisine(res.data.data);
      // console.log(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCuisine(id);
  }, [id]);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body">
              <div className="text-center mb-4">
                <img
                  src={cuisine.imgUrl}
                  alt={cuisine.name}
                  style={{
                    width: "300px",
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginBottom: "20px",
                  }}
                  className="img-fluid"
                />
                <h2 className="card-title mb-3">{cuisine.name}</h2>
                <div className="badge bg-primary mb-2">{cuisine.category}</div>
                <h4 className="text-success mb-3">Rp {cuisine.price?.toLocaleString()}</h4>
                <p className="text-muted">{cuisine.description}</p>
                <p className="mb-0">
                  <small className="text-muted">Stock: {cuisine.stock}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
