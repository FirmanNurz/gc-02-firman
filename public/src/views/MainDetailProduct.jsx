import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import axios from "axios";

export default function MainDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);


  async function fetchProduct() {
    try {
      setLoading(true);
      const { data } = await axios.get(`https://h8-phase2-gc.vercel.app/apis/pub/restaurant-app/cuisines/${id}`);
      if (data?.data) {
        setProduct(data.data);
      } else {
        setProduct({});
        console.log("No data available or invalid format");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setProduct({});
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProduct();
  }, []);

  if (loading) {
    return <h1 className="text-center text-2xl mt-10">Loading...</h1>;
  }

  return (
    <>
      <main className="p-10">
        <div className="space-y-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition flex items-center">
            <img
              src={product?.imgUrl}
              alt={product.name}
              className="w-48 h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-red-600">{product.name}</h3>
              <hr className="h-px my-2 bg-gray-300 border-0" />
              <p className="text-gray-700 text-sm">
                {product.description}
              </p>
            </div>
            <div>
              <Link to= "/" className="bg-red-600 text-white px-5 py-3 rounded-bl-lg rounded-tr-lg hover:bg-red-700 transition">
              Back
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
